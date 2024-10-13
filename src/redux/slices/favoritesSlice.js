import { createSlice } from "@reduxjs/toolkit";
import { loadFavoritesFromLocalStorage, saveFavoritesToLocalStorage } from "../operations/favoritesLocalStorage.js";


const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: loadFavoritesFromLocalStorage(), // Завантажуємо дані з localStorage
  },
  reducers: {
    addToFavorites: (state, action) => {
      const vehicle = action.payload;
      state.favorites.push(vehicle);
      saveFavoritesToLocalStorage(state.favorites); // Зберігаємо в localStorage
    },
    removeFromFavorites: (state, action) => {
      const vehicleId = action.payload.id;
      state.favorites = state.favorites.filter(vehicle => vehicle.id !== vehicleId);
      saveFavoritesToLocalStorage(state.favorites); // Оновлюємо localStorage
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
