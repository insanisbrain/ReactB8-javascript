import { configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./Slice/RestaurantSlice";

export const Store = configureStore({
  reducer: {
    restaurant: RestaurantSlice.reducer,
  }
});

