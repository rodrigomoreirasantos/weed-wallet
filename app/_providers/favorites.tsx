"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface FavortiesProps {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const FavoritesContext = createContext({} as FavortiesProps);

const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
