import { configureStore} from "@reduxjs/toolkit";
import campersReducer from "./slices/campersSlice.js";


 const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

export default store;




