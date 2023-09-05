import { Dispatch, useCallback, useState } from "react";
import { PAGE_SIZE } from "../constant";

interface UsePaginator<T> {
  data: T[];
  count?: number;
}

interface Pagination {
  pageSize: number;
  page: number;
}

interface IProps<T> extends Pagination {
  getPaginatedData: (options: UsePaginator<T>) => T[];
  setPageSize: Dispatch<number>;
  setPage: Dispatch<number>;
}

/**
 * Generates a custom paginator hook that allows pagination of a list of data.
 *
 * @template T - The type of data being paginated.
 * @returns {IProps<T>} An object containing the paginated data and pagination controls.
 */
export function usePaginator<T>(): IProps<T> {
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    pageSize: PAGE_SIZE,
  });

  const setPageSize = useCallback((pageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      pageSize,
      page: prev.pageSize !== pageSize ? 0 : prev.page,
    }));
  }, []);

  const setPage = useCallback((page: number) => {
    setPagination((prev) => ({
      ...prev,
      page,
    }));
  }, []);

  const getPaginatedData = useCallback(
    ({ data, count }: UsePaginator<T>) => {
      const lenghtOfData = count || data.length;
      const offset = pagination.page * pagination.pageSize;
      const maxOffset = offset > lenghtOfData ? lenghtOfData : offset;

      return data.slice(maxOffset, maxOffset + pagination.pageSize);
    },
    [pagination]
  );

  return {
    getPaginatedData,
    page: pagination.page,
    pageSize: pagination.pageSize,
    setPageSize,
    setPage,
  };
}
