import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RestaurantService from "../../API/RestaurantService";

const initialState = {
  data: {},
};

export const fetchRestaurants = createAsyncThunk("fetchRestaurants", async () => {
  const response = await RestaurantService.getRestaurants();
  return response;
});

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const selectRestaurants = (state) => state.restaurant.data;
