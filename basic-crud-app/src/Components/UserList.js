import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = () => {
    axios.get('http://localhost:8000/user')
      .then((response) => setData(response.data))
      .catch((error) => console.error("error", error))
  }

  return (
    <div>
      <h3>Users List</h3>
      {console.log("data", data)}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Gender</th>
            <th scope="col">Age</th>
            <th scope="col">Education</th>
            <th scope="col">Designation</th>
            <th scope="col">Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.education}</td>
                  <td>{user.designation}</td>
                  <td>{user.hobbies.toString()}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserList