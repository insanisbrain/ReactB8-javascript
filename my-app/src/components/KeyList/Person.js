import React from 'react'

const Person = ({ namesValue, key }) => {
  return (
    <div>
      {key}<h2>I am {namesValue.name}, age is {namesValue.age} , I know {namesValue.skills}</h2>
    </div>
  )
}

export default Person