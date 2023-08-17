// FavoritesContext.js
import React, { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (shoe) => {
    if (!isFavorite(shoe.title)) {
      setFavorites([...favorites, shoe]);
    }
  };

  const removeFromFavorites = (title) => {
    setFavorites(favorites.filter((fav) => fav.title !== title));
  };

  const isFavorite = (title) => {
    return favorites.some((fav) => fav.title === title);
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
