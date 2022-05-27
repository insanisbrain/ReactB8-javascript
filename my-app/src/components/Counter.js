import React, { useState } from 'react'

const Counter = () => {

  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCounter((payal) => payal + 1);
    }
  }

  return (
    <div>
      Count : {counter}
      {/* <button onClick={() => setCounter(counter + 1)}>Count -- {counter}</button> */}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
      <button onClick={() => setCounter(initialValue)}>Reset</button>
    </div>
  )
}

export default Counter