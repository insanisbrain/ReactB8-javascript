import React, { useState, useEffect } from 'react'

const HookCounter = () => {

  const initialValue = 0;
  const [counter, setCounter] = useState(initialValue);
  const [sum, setSum] = useState(initialValue);

  const loadAtCounterUpdate = () => {
    console.log("Hey loadAtCounterUpdate");
  }

  const loadAtSumUpdate = () => {
    console.log("Hey loadAt SUM Update");
  }

  useEffect(() => {
    loadAtCounterUpdate();
  }, [counter])

  useEffect(() => {
    loadAtSumUpdate()
  }, [sum])

  return (
    <div>
      Counter: {counter} <br></br>
      SUM : {sum} <br></br>
      <button onClick={() => setCounter(counter + 1)}>Increment</button> <br></br>
      <button onClick={() => setSum(sum + 10)}>Add Sum</button><br></br>
    </div>

  )
}

export default HookCounter