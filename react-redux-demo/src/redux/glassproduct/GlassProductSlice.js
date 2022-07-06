import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfGlassProduct: 0
}

export const glassProductSlice = createSlice({
  name: 'glassProduct',
  initialState,
  reducers: {
    BUY_GLASS_PRODUCT: (state) => {
      return {
        ...state,
        numOfGlassProduct: state.numOfGlassProduct - 1
      }
    },
    ADD_GLASS_PRODUCT: (state) => {
      return {
        ...state,
        numOfGlassProduct: state.numOfGlassProduct + 1
      }
    }
  }
});

export const { BUY_GLASS_PRODUCT, ADD_GLASS_PRODUCT } = glassProductSlice.actions;
export default glassProductSlice.reducer