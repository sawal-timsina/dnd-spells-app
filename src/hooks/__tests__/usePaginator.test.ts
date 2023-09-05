import { renderHook, act } from "@testing-library/react";
import { usePaginator } from "../usePaginator";
import { PAGE_SIZE } from "../../constant";

describe("usePaginator", () => {
  it("should initialize with default pagination values", () => {
    const { result } = renderHook(() => usePaginator<number>());

    expect(result.current.page).toBe(0);
    expect(result.current.pageSize).toBe(PAGE_SIZE);
  });

  it("should update the page size correctly", () => {
    const { result } = renderHook(() => usePaginator<number>());

    act(() => {
      result.current.setPageSize(10);
    });

    expect(result.current.pageSize).toBe(10);
    expect(result.current.page).toBe(0);
  });

  it("should update the page correctly", () => {
    const { result } = renderHook(() => usePaginator<number>());

    act(() => {
      result.current.setPage(2);
    });

    expect(result.current.page).toBe(2);
  });

  it("should return the paginated data correctly", () => {
    const { result } = renderHook(() => usePaginator<number>());

    const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    act(() => {
      result.current.setPageSize(2);
      result.current.setPage(1);
    });

    expect(result.current.getPaginatedData({ data: testData })).toEqual([3, 4]);
  });
});
