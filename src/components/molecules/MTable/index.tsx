import * as React from "react";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { jsx } from "@emotion/react";
import { PAGE_SIZE_OPTIONS } from "../../../constant";
import JSX = jsx.JSX;

interface TableData {
  [key: string | number]: any;
}

export interface TableHeader<T extends TableData> {
  dataIndex: keyof T;
  render?: (value: any, data: T) => JSX.Element;
  width?: string | number;
}

interface IProps<T extends TableData> {
  data: T[];
  headers: TableHeader<T>[];
  page: number;
  count: number;
  pageSize: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  onRowsPerPageChange?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  loading?: boolean;
  renderEmpty?: JSX.Element;
  onRowClick?: (data: T) => void;
  rowsPerPageOptions?: number[];
  headerPagination?: boolean;
}

/**
 * Renders a Material-UI table component with pagination and loading state.
 *
 * @param {IProps<T>} {
 *   data,
 *   headers,
 *   count,
 *   page,
 *   pageSize,
 *   loading,
 *   onPageChange,
 *   onRowsPerPageChange,
 *   renderEmpty
 * } - The props for the table component.
 * @return {JSX.Element} - The rendered table component.
 */
export function MTable<T extends TableData>({
  data,
  headers,
  count,
  page,
  pageSize,
  loading,
  onPageChange,
  onRowsPerPageChange,
  renderEmpty,
  onRowClick,
  rowsPerPageOptions,
  headerPagination = true,
}: IProps<T>) {
  return (
    <TableContainer>
      <Table>
        {count > pageSize && headerPagination && (
          <TableHead>
            <TableRow>
              <TablePagination
                page={page}
                count={count}
                rowsPerPageOptions={rowsPerPageOptions || PAGE_SIZE_OPTIONS}
                rowsPerPage={pageSize}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
              />
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {!data.length && !loading && (
            <TableRow>
              <TableCell
                colSpan={headers.length}
                align={"center"}
                sx={{
                  border: "none",
                }}
              >
                {renderEmpty ?? "No data"}
              </TableCell>
            </TableRow>
          )}
          {data.map((value, index) => {
            return (
              <TableRow
                hover
                key={index}
                onClick={() => onRowClick?.(value)}
                sx={{
                  pointerEvents: "visibleFill",
                }}
              >
                {headers.map(({ dataIndex, width, render }, index) => {
                  const value_ = value[dataIndex];
                  return (
                    <TableCell key={index} width={width}>
                      {render ? render(value_, value) : value_}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
          {loading && (
            <TableRow>
              <TableCell
                colSpan={headers.length}
                align={"center"}
                sx={{
                  border: "none",
                }}
              >
                <CircularProgress sx={{ height: 32, width: 32 }} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
        {count > pageSize && (
          <TableFooter>
            <TableRow>
              <TablePagination
                page={page}
                count={count}
                rowsPerPageOptions={rowsPerPageOptions || PAGE_SIZE_OPTIONS}
                rowsPerPage={pageSize}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
              />
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </TableContainer>
  );
}
