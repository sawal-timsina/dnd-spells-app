import React from "react";
import { SpellDetails } from "../interfaces";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getSpellDetail } from "../services/spell";

interface IProps {
  loading?: boolean;
  data: SpellDetails | undefined;
}

export const useSpellDetails = (): IProps => {
  const { query } = useRouter();

  const { data, isLoading } = useQuery(
    ["spell-details", query.id],
    getSpellDetail,
    {
      enabled: !!query.id,
    }
  );

  return {
    loading: isLoading || data == null,
    data: data,
  };
};
