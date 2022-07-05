import { ADD_EYE_PRODUCT, BUY_EYE_PRODUCT } from "./EyeProductConstant"

export const buyEyeProduct = () => {
  return {
    type: BUY_EYE_PRODUCT
  }
}

export const addEyeProduct = () => {
  return {
    type: ADD_EYE_PRODUCT
  }
}