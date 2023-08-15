// FavoritesContext.js
import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (title) => {
    if (!isFavorite(title)) {
      setFavorites([...favorites, title]);
    }
  };

  const removeFromFavorites = (title) => {
    setFavorites(favorites.filter((fav) => fav !== title));
  };

  const isFavorite = (title) => {
    return favorites.includes(title);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
