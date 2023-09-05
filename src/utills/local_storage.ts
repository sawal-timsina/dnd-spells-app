import { Spell } from "../interfaces";

/**
 * Saves the given array of favourite spells to local storage.
 *
 * @param {Spell[]} favouriteSpells - The array of favourite spells to be saved.
 * @throws {Error} Throws an error if local storage is not supported.
 */
const saveFavouriteSpell = (favouriteSpells: Spell[]) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify(favouriteSpells));
  } else {
    throw new Error("Local storage not supported");
  }
};

/**
 * Fetches the favourite spells from the local storage.
 *
 * @return {Spell[]} An array of favourite spells.
 */
const fetchFavouriteSpells = (): Spell[] => {
  if (typeof Storage !== "undefined") {
    const favouriteSpells = localStorage.getItem("favorites");
    return favouriteSpells ? JSON.parse(favouriteSpells) : [];
  } else {
    throw new Error("Local storage not supported");
  }
};

export { saveFavouriteSpell, fetchFavouriteSpells };
