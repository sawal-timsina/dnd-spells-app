import React, { Dispatch, useCallback, useMemo } from "react";
import { Spell } from "../interfaces";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchSpellList } from "../services";
import { usePaginator } from "./usePaginator";
import { TableHeader } from "../components";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavouritesContext } from "../states/favourites";

interface IProps {
  onTabChange: () => void;
  spells: Spell[];
  totalSpells: number;
  pageSize: number;
  page: number;
  tableHeader: TableHeader<Spell>[];
  setPageSize: Dispatch<number>;
  setPage: Dispatch<number>;
  loading?: boolean;
}

/**
 * Generates a custom hook for the home page.
 *
 * ..returns {IProps} An object containing the necessary data and functions for the home page.
 */
export const useHome = (): IProps => {
  const { replace } = useRouter();
  const { isFavourite, toggleFavourite } = useFavouritesContext();
  const { getPaginatedData, pageSize, setPageSize, page, setPage } =
    usePaginator<Spell>();

  const { data, isLoading } = useQuery(["spell-list"], fetchSpellList);

  const paginatedData = getPaginatedData({
    data: data?.results || [],
    count: data?.count || 0,
  });

  const onTabChange = useCallback(() => {
    replace("/favourites");
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
                onClick={(event) => {
                  event.stopPropagation();
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
    tableHeader,
    onTabChange,
    spells: paginatedData,
    totalSpells: data?.count || 0,
    pageSize,
    setPageSize,
    page,
    setPage,
    loading: isLoading,
  };
};
