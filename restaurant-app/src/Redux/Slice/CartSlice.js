// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import CartService from "../../API/CartService";

// const initialState = {
//   data: {},
// };

// export const fetchCart = createAsyncThunk("fetchRestaurants", async () => {
//   const response = await CartService.getCart();
//   return response;
// });

// export const CartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchCart.fulfilled, (state, action) => {
//       state.data = action.payload.data;
//     });
//   },
// });

// export const selectCart = (state) => state.cart.data;
