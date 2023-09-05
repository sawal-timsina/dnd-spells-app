import { createContext, FC, ReactNode, useContext } from "react";
import { Spell } from "../interfaces";
import { useFavouriteSpells } from "../hooks/useFavouriteSpells";

interface ContextProps {
  favourites: Spell[];
  loading: boolean;
  toggleFavourite: (favourite: Spell) => void;
  isFavourite: (index: string) => boolean;
}

interface IProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<ContextProps>({
  favourites: [],
  loading: false,
  toggleFavourite: () => {},
  isFavourite: () => false,
});

/**
 * Returns the value of the `FavouritesContext` by using the `useContext` hook.
 *
 * @return {any} The value of the `FavouritesContext`.
 */
export const useFavouritesContext = () => useContext(FavouritesContext);

/**
 * Creates a favourites provider component.
 *
 * @param {IProps} props - The properties for the component.
 * @return {ReactNode} The rendered component.
 */
export const FavouritesProvider: FC<IProps> = ({ children }) => {
  const { loading, favourites, isFavourite, toggleFavourite } =
    useFavouriteSpells();

  return (
    <FavouritesContext.Provider
      value={{
        loading,
        favourites,
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
