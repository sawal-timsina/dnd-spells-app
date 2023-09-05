import { useRouter } from "next/router";
import React, { Dispatch, useCallback, useMemo } from "react";
import { Spell } from "../interfaces";
import { usePaginator } from "./usePaginator";
import { useFavouritesContext } from "../states/favourites";
import { TableHeader } from "../components";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IProps {
  onTabChange: () => void;
  spells: Spell[];
  totalSpells: number;
  pageSize: number;
  page: number;
  setPageSize: Dispatch<number>;
  setPage: Dispatch<number>;
  tableHeader: TableHeader<Spell>[];
  loading?: boolean;
}

/**
 * Generates a custom hook that provides functionality for managing and displaying a list of favourite spells.
 *
 * @return {IProps} An object containing the necessary functions and data for managing and displaying favourite spells.
 */
export const useFavourite = (): IProps => {
  const { replace } = useRouter();
  const { getPaginatedData, pageSize, setPageSize, page, setPage } =
    usePaginator<Spell>();

  const { favourites, loading, isFavourite, toggleFavourite } =
    useFavouritesContext();

  const paginatedData = getPaginatedData({
    data: favourites || [],
    count: favourites?.length || 0,
  });

  const onTabChange = useCallback(() => {
    replace("/");
  }, [replace]);

  const tableHeader: TableHeader<Spell>[] = useMemo(
    () => [
      { dataIndex: "name" },
      {
        width: 56,
        dataIndex: "index",
        render: (value: string, data: Spell) => {
          const isFavourite_ = isFavourite(value);
          return (
            <Tooltip
              title={
                isFavourite_ ? "Remove from favourites" : "Add to favourites"
              }
            >
              <IconButton
                aria-label={"favourite"}
                size={"small"}
                onClick={() => {
                  toggleFavourite(data);
                }}
              >
                {isFavourite_ ? (
                  <FavoriteIcon fontSize={"inherit"} />
                ) : (
                  <FavoriteBorderIcon fontSize={"inherit"} />
                )}
              </IconButton>
            </Tooltip>
          );
        },
      },
    ],
    [isFavourite, toggleFavourite]
  );

  return {
    onTabChange,
    spells: paginatedData,
    totalSpells: favourites?.length || 0,
    pageSize,
    setPageSize,
    page,
    setPage,
    loading,
    tableHeader,
  };
};
