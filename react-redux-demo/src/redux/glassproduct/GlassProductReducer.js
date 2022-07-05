import { BUY_GLASS_PRODUCT, ADD_GLASS_PRODUCT } from "./GlassProductConstant";

const initialState = {
  numOfGlassProduct: 0
}

const GlassProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_GLASS_PRODUCT:
      return {
        ...state,
        numOfGlassProduct: state.numOfGlassProduct - 1
      }
    case ADD_GLASS_PRODUCT:
      return {
        ...state,
        numOfGlassProduct: state.numOfGlassProduct + 1
      }
    default: return state;
  }
}

export default GlassProductReducer;