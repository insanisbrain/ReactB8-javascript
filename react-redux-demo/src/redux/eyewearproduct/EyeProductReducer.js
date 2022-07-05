import { ADD_EYE_PRODUCT, BUY_EYE_PRODUCT } from "./EyeProductConstant";

const initialState = {
  numOfEyeProduct: 0
}

const EyeProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_EYE_PRODUCT:
      return {
        ...state,
        numOfEyeProduct: state.numOfEyeProduct - 1
      }
    case ADD_EYE_PRODUCT:
      return {
        ...state,
        numOfEyeProduct: state.numOfEyeProduct + 1
      }
    default: return state;
  }
}

export default EyeProductReducer;