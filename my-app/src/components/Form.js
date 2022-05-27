import React, { useState } from 'react'

const Form = () => {

  const initialValue = {
    firstName: '',
    lastName: ''
  }
  const [name, setName] = useState(initialValue)

  // let initialArrayItem = [
  //   {
  //     id: 0,
  //     name: 'Ankit',
  //     salary: 20000,
  //     designation: 'Sr. Software Developer'
  //   }
  // ]

  // const [items, setItems] = useState(initialArrayItem);

  // const addItem = () => {
  //   let data = [...items];

  //   let anotherName = {
  //     id: 1,
  //     name: 'Gorakh',
  //     salary: 100000,
  //     designation: 'CEO'
  //   }
  //   data.push(anotherName)
  //   console.log("data", data);
  //   // 
  //   setItems(data)
  // }

  return (
    <div>
      {/* Form */}
      <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
      <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
      {/* Form */}

      <h2>Your first name is = {name.firstName}</h2>
      <h2>Your last name is = {name.lastName}</h2>

      {/* <button onClick={addItem}>Add A Number</button> */}
      {/* <ul>
        {items.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul> */}
      {/* {items.map((item, index) => {
        return (
          <div>
            {item.id} . Your Name is: {item.name} & salary is: {item.salary}
          </div>
        )
      })} */}
    </div>
  )
}

export default Form