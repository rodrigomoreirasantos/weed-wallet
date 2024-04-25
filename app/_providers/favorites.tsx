"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface FavoritesArrayProps {
  id: string;
  name: string;
  type: string;
  thc: string;
  cbd: string;
  userId: string;
  liked: boolean;
}

interface FavortiesProps {
  favorites: FavoritesArrayProps[];
  setFavorites: Dispatch<SetStateAction<FavoritesArrayProps[]>>;
  favoritesWeeds: FavoritesArrayProps[];
}

export const FavoritesContext = createContext({} as FavortiesProps);

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoritesArrayProps[]>([]);

  const favoritesWeeds = favorites.filter(
    (favorite) => favorite.liked === true
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, favoritesWeeds }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
