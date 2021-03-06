import React, { useState } from 'react'

const Form = () => {

  const initialValue = {
    firstName: '',
    lastName: ''
  }
  const [name, setName] = useState(initialValue)


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

  var initialArrayItem = [
    {
      fName: "Ankit",
      lName: "Varia",
      designations: ["Sr. Software Developer", "Manager", "CEO"]
    },
    {
      fName: "Gorakh",
      lName: "Kharat",
      designations: ["Super Sr. Software Developer", "Super Sr. Manager", "Supeer Sr. CEO"]
    },
    {
      fName: "Javascript",
      lName: "React",
      designations: ["Extra Super. Software Developer", "Extra Super Manager", "Extra Super CEO"]
    }
  ]


  const [items, setItems] = useState(initialArrayItem);

  const addNewMember = () => {

    let newItems = [...items];
    let newMember = {
      fName: "Youtube",
      lName: "Google",
      designations: ["Software"]
    }
    newItems.push(newMember);


    // Setting new items in your useState
    setItems([...newItems]);
  }

  return (
    <div>
      {/* Form */}
      {/* <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
      <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} /> */}
      {/* Form */}

      {/* <h2>Your first name is = {name.firstName}</h2>
      <h2>Your last name is = {name.lastName}</h2> */}

      {/* <button onClick={addItem}>Add A Number</button> */}
      {/* <ul>
        {items.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul> */}
      {items.map((item) => {
        return (
          <div>Hey your name is {item.fName} {item.lName}</div>
        )
      })}
      <button onClick={addNewMember}>Add New Memmber</button>
    </div>
  )
}

export default Form