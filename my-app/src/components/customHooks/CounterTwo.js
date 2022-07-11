import React from 'react'
import useCounter from './hook/useCounter'

const CounterTwo = () => {

  const [counter, increment, decrement, reset] = useCounter(10, 10)

  return (
    <div>
      Counter TWO : {counter}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterTwo