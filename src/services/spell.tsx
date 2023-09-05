import { Res } from "../interfaces/res";
import { Spell, SpellDetails } from "../interfaces";
import { Axios } from "../utills/axios";
import { QueryFunction } from "react-query";

export const fetchSpellList = async (): Promise<Res<Spell[]>> => {
  const { data } = await Axios.get<Res<Spell[]>>(`/api/spells`);
  return data;
};

export const getSpellDetail: QueryFunction<SpellDetails> = async ({
  queryKey,
}) => {
  const index = queryKey[1];
  const { data } = await Axios.get<SpellDetails>(`/api/spells/${index}`);
  return data;
};
