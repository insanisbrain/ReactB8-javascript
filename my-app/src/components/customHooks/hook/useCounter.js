import { useState } from 'react'

const useCounter = (initialValue = 0, value) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + value);
  }

  const decrement = () => {
    setCounter(counter - value);
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return [counter, increment, decrement, reset]
}

export default useCounter