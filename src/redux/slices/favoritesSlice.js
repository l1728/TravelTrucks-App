import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [], // завантажити обране з localStorage
  },
  reducers: {
    addToFavorites: (state, action) => {
      const vehicle = action.payload;
      state.favorites.push(vehicle);
      localStorage.setItem("favorites", JSON.stringify(state.favorites)); // зберегти в localStorage
    },
    removeFromFavorites: (state, action) => {
      const vehicleId = action.payload.id;
      state.favorites = state.favorites.filter(vehicle => vehicle.id !== vehicleId);
      localStorage.setItem("favorites", JSON.stringify(state.favorites)); // зберегти в localStorage
    },
  },
});

// Експортуємо дії та редюсер
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
