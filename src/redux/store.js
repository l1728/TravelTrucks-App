import { configureStore} from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice.js";
import favoritesReducer from './slices/favoritesSlice.js';

 const store = configureStore({
  reducer: {
     campers: campersReducer,
     favorites: favoritesReducer,
  },
});

export default store;




