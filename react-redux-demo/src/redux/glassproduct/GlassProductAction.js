import { ADD_GLASS_PRODUCT, BUY_GLASS_PRODUCT } from "./GlassProductConstant"

export const buyGlassProduct = () => {
  return {
    type: BUY_GLASS_PRODUCT
  }
}

export const addGlassProduct = () => {
  return {
    type: ADD_GLASS_PRODUCT
  }
}