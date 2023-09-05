import { useCallback, useEffect, useState } from "react";
import { Spell } from "../interfaces";
import {
  fetchFavouriteSpells,
  saveFavouriteSpell,
} from "../utills/local_storage";

/**
 * Generates a custom hook that manages a list of favourite spells.
 *
 * @return {object} An object containing the following properties:
 *   - `loading` (boolean): Indicates whether the list of favourite spells is currently being loaded.
 *   - `favourites` (Spell[]): An array of favourite spells.
 *   - `toggleFavourite` (function): A function that toggles the favourite status of a spell.
 *   - `isFavourite` (function): A function that checks if a spell is in the list of favourites.
 */
export const useFavouriteSpells = () => {
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState<Spell[]>([]);

  useEffect(() => {
    setLoading(true);
    const favourite = fetchFavouriteSpells();
    setFavourites(favourite);
    setLoading(false);
  }, []);

  const isFavourite = useCallback(
    (favouriteSpellIndex: string) => {
      return favourites.some((spell) => spell.index === favouriteSpellIndex);
    },
    [favourites]
  );

  const toggleFavourite = useCallback(
    (favourite: Spell) => {
      setLoading(true);
      const _favouriteSpellIdentifiers = [...favourites];
      const itemIndex = favourites.findIndex(
        (item) => item.index === favourite.index
      );
      if (itemIndex !== -1) {
        _favouriteSpellIdentifiers.splice(itemIndex, 1);
      } else {
        _favouriteSpellIdentifiers.push(favourite);
      }

      setFavourites(_favouriteSpellIdentifiers);
      saveFavouriteSpell(_favouriteSpellIdentifiers);
      setLoading(false);
    },
    [favourites]
  );

  return {
    loading,
    favourites,
    toggleFavourite,
    isFavourite,
  };
};
