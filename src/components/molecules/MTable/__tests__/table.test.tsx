import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MTable, TableHeader } from "../index";
import { Spell } from "../../../../interfaces";

test("renders table component with pagination", () => {
  const data: Spell[] = [
    {
      index: "acid-arrow",
      name: "Acid Arrow",
      url: "/api/spells/acid-arrow",
    },
    {
      index: "acid-splash",
      name: "Acid Splash",
      url: "/api/spells/acid-splash",
    },
    {
      index: "aid",
      name: "Aid",
      url: "/api/spells/aid",
    },
    {
      index: "alarm",
      name: "Alarm",
      url: "/api/spells/alarm",
    },
  ];
  const headers: TableHeader<Spell>[] = [
    { dataIndex: "index", width: 50 },
    { dataIndex: "name", width: 100 },
  ];
  const count = data.length;
  const page = 0;
  const pageSize = 1;
  const loading = false;
  const onPageChange = jest.fn();
  const onRowsPerPageChange = jest.fn();
  const onRowClick = jest.fn();

  const { queryByText, getByLabelText } = render(
    <MTable<Spell>
      data={data}
      headers={headers}
      count={count}
      page={page}
      pageSize={pageSize}
      loading={loading}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      onRowClick={onRowClick}
      rowsPerPageOptions={[1, 2, 3]}
      headerPagination={false}
    />
  );

  // Check if table data is rendered correctly
  expect(queryByText("Acid Arrow")).toBeTruthy();

  // Check if page change event is triggered correctly
  userEvent.click(getByLabelText("Go to next page"));
  expect(onPageChange).toHaveBeenCalled();

  // Check if rows per page change event is triggered correctly
  userEvent.click(getByLabelText("Rows per page:"));
  userEvent.click(getByLabelText("2"));
  expect(onRowsPerPageChange).toHaveBeenCalled();

  // Check if row click event is triggered correctly
  userEvent.click(getByLabelText("Acid Arrow"));
  expect(onRowClick).toHaveBeenCalledWith({
    index: "acid-arrow",
    name: "Acid Arrow",
    url: "/api/spells/acid-arrow",
  });
});

test("renders empty state when no data is available", () => {
  const data: Spell[] = [];
  const headers: TableHeader<Spell>[] = [{ dataIndex: "index", width: 50 }];
  const count = 0;
  const page = 0;
  const pageSize = 10;
  const loading = false;
  const onPageChange = jest.fn();
  const onRowsPerPageChange = jest.fn();
  const onRowClick = jest.fn();

  const { queryByText } = render(
    <MTable<Spell>
      data={data}
      headers={headers}
      count={count}
      page={page}
      pageSize={pageSize}
      loading={loading}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      onRowClick={onRowClick}
    />
  );

  // Check if empty state message is rendered correctly
  expect(queryByText("No data")).toBeTruthy();
});

test("renders loading state when loading is true", () => {
  const data: Spell[] = [];
  const headers: TableHeader<Spell>[] = [{ dataIndex: "index", width: 50 }];
  const count = 0;
  const page = 0;
  const pageSize = 10;
  const loading = true;
  const onPageChange = jest.fn();
  const onRowsPerPageChange = jest.fn();
  const onRowClick = jest.fn();

  const { getByRole } = render(
    <MTable<Spell>
      data={data}
      headers={headers}
      count={count}
      page={page}
      pageSize={pageSize}
      loading={loading}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      onRowClick={onRowClick}
    />
  );
  expect(getByRole("progressbar")).toBeTruthy();
});
