import React from 'react'
import Person from './Person';

const List = () => {

  const names = ["Ankit", "Gorakh", "React", "Javascript"];
  const persons = [
    {
      id: 1,
      name: "Ankit",
      age: 27,
      skills: 'React'
    },
    {
      id: 2,
      name: "Ankit",
      age: 30,
      skills: 'Angular'
    },
    {
      id: 3,
      name: "XYZ",
      age: 23,
      skills: 'Javascript'
    }
  ]

  const personList = persons.map(person => <Person key={person.id} namesValue={person} />)
  const nameList = names.map((name, index) => <h2 key={index}>{index} - {name}</h2>)

  return (
    <div>
      {personList}
      {/* {nameList} */}
    </div>
  )
}

export default List