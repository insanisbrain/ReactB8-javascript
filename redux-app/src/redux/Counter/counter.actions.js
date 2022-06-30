import { DECREMENT, INCREMENT } from "./counter.types"

export const increaseCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}