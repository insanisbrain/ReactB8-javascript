import React from 'react'
import World from './world'

const Greet = (props) => {
  console.log("Props -->", props)

  let sum = 0;
  const total = () => {
    props.values.forEach((value) => {
      sum += value
    });

    return <h1>{sum}</h1>;
  }

  return (
    <div>
      {props.children}
      <h1>Greeting from :: {props.name} ::: & designation  is :: {props.designation} &&  {total()}</h1>
      <World name={props.name} xyz="testtest" />
    </div>

  )
}

export default Greet