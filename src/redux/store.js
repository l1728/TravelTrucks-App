import { configureStore} from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice.js";
import favoritesReducer from './slices/favoritesSlice.js';
import filtersReducer from './slices/filterSlice';

 const store = configureStore({
  reducer: {
     campers: campersReducer,
     favorites: favoritesReducer,
     filters: filtersReducer,
  },
});

export default store;




