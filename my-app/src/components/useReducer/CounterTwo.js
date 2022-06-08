import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const CounterTwo = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div>
        <div>First Counter - {count.firstCounter}</div>
        <button onClick={() => dispatch({ type: 'increment', value: 2 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>

        <button onClick={() => dispatch({ type: 'increment', value: 15 })}>Increment 5</button>
        <button onClick={() => dispatch({ type: 'decrement', value: 10 })}>Decrement 5</button>

        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      <div>
        <div>Second Counter - {count.secondCounter}</div>
        <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>Decrement</button>
      </div>

    </div>
  )
}

export default CounterTwo