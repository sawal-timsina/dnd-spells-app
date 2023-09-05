import { act, renderHook } from "@testing-library/react";
import { useFavouriteSpells } from "../useFavouriteSpells";

describe("Given useFavouriteSpells must perform as below", () => {
  test("should initialize favourites as an empty array", () => {
    const { result } = renderHook(() => useFavouriteSpells());
    expect(result.current.favourites).toEqual([]);
  });

  test("should toggle favourite status of a spell", () => {
    const { result } = renderHook(() => useFavouriteSpells());

    act(() => {
      result.current.toggleFavourite({
        index: "1",
        name: "Spell 1",
        url: "spells/1",
      });
    });

    expect(result.current.favourites).toEqual([
      { index: "1", name: "Spell 1", url: "spells/1" },
    ]);

    act(() => {
      result.current.toggleFavourite({
        index: "1",
        name: "Spell 1",
        url: "spells/1",
      });
    });

    expect(result.current.favourites).toEqual([]);
  });

  test("should check if a spell is in the list of favourites", () => {
    const { result } = renderHook(() => useFavouriteSpells());

    act(() => {
      result.current.toggleFavourite({
        index: "1",
        name: "Spell 1",
        url: "spells/1",
      });
    });

    expect(result.current.isFavourite("1")).toBe(true);
    expect(result.current.isFavourite("2")).toBe(false);
  });
});
