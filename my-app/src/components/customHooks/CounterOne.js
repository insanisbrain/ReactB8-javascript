import React from 'react'
import useCounter from './hook/useCounter'

const CounterOne = () => {

  const [counter, increment, decrement, reset] = useCounter()

  return (
    <div>
      Counter ONE : {counter}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterOne