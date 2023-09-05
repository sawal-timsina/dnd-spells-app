import { fetchFavouriteSpells, saveFavouriteSpell } from "../local_storage";
import { Spell } from "../../interfaces";

describe("Given the favourite spells are stored in local storage", () => {
  const favouriteSpells: Spell[] = [
    { index: "acid-arrow", name: "Acid arrow", url: "acid-arrow" },
  ];

  describe("When retrieving data for the first time", () => {
    it("Then array of length zero should be returned", () => {
      const retrievedSpells = fetchFavouriteSpells();
      expect(retrievedSpells.length).toEqual(0);
    });
  });

  describe("When favourite spells are stored", () => {
    it("Then the data is stored successfully", () => {
      expect(saveFavouriteSpell(favouriteSpells));
    });
  });

  describe("When retrieving data after data has already been stored", () => {
    it("Then retrieved data should match with the stored one", () => {
      const retrievedSpells = fetchFavouriteSpells();
      expect(retrievedSpells.length).toEqual(favouriteSpells.length);
      retrievedSpells.forEach((spell, index) => {
        expect(spell.index).toBe(favouriteSpells[index].index);
      });
    });
  });
});
