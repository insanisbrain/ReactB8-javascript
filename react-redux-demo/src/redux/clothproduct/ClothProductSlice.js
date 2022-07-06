import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numOfClothProducts: 10,
  colors: ["RED", "BLUE"]
}

export const clothProductSlice = createSlice({
  name: 'clothProduct',
  initialState,
  reducers: {
    BUY_CLOTH_PRODUCT: (state) => {
      return {
        ...state,
        numOfClothProducts: state.numOfClothProducts - 1
      }
    },
    ADD_CLOTH_PRODUCT: (state) => {
      return {
        ...state,
        numOfClothProducts: state.numOfClothProducts + 1
      }
    },
    RESET_CLOTH_PRODUCT: (state) => {
      return {
        ...initialState
      }
    }
  }
})

export const { BUY_CLOTH_PRODUCT, ADD_CLOTH_PRODUCT, RESET_CLOTH_PRODUCT } = clothProductSlice.actions;
export default clothProductSlice.reducer