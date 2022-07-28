import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/User/userSlice';
import { useNavigate } from 'react-router-dom';


const UserList = () => {

  const fakeData = [
    {
      name: 'ankit varia',
      age: '27',
      salary: '1000000000',
      Education: [
        {
          name: '10th',
          board: 'XYZ Board',
          state: [
            {
              name: 'Gujarat',
              city: 'vadodara'
            },
            {
              name: 'Maharashtra',
              city: 'Pune'
            }
          ]
        },
        {
          name: '12th',
          board: 'ABC Board',
          state: [
            {
              name: 'Delhi',
              city: 'Delhi'
            },
            {
              name: 'Rajasthan',
              city: 'Ajmer'
            }
          ]
        }
      ]
    },
    {
      name: 'Gorakh Kharat',
      age: '30',
      salary: '2000000000',
      Education: [
        {
          name: '10th',
          board: 'Nirma Board',
          state: [
            {
              name: 'Gujarat',
              city: 'Ahemdabad'
            },
            {
              name: 'Maharashtra',
              city: 'Nashik'
            }
          ]
        },
        {
          name: '12th',
          board: 'FGH Board',
          state: [
            {
              name: 'Madhya Pradesh',
              city: 'Indore'
            },
            {
              name: 'Tamil Nadu',
              city: '12345667'
            }
          ]
        }
      ]
    }
  ]

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const userData = useSelector(state => state.users.data)

  useEffect(() => {
    loadUserData()
  }, [])

  useEffect(() => {
    if (userData.length) {
      setData(userData);
    }
  }, [userData])

  const loadUserData = () => {
    dispatch(fetchUsers())
  }

  const userDelete = async (data) => {
    let response = await axios.delete(`http://localhost:8000/user/${data.id}`);
    if (response) {
      loadUserData();
    }
  }

  const userEdit = (data) => {
    navigate(`/updateuser/${data.id}`);
  }

  const setLocalStoageData = () => {
    localStorage.setItem("email", "ankit@gmail.com");
  }

  return (
    <div>
      <h3>Users List</h3>
      <button onClick={() => setLocalStoageData()}>Add Local Storage Data</button>
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
            <th scope="col">Actions</th>
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
                  <td width="170">
                    <button type="button" className="btn btn-primary me-2" onClick={() => userEdit(user)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={() => userDelete(user)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <h3>Nested For Loops</h3>
      {
        fakeData.map((level1) => {
          return (
            <div className="mt-5">
              <div className="row border">
                Name = {level1.name}
              </div>
              <div className="row border">
                Age = {level1.age}
              </div>
              <div className="row border">
                Salary = {level1.salary}
              </div>
              <div className="row border">
                {
                  level1.Education.map((level2) => {
                    return (
                      <>
                        <div className="row">
                          Education Name = {level2.name} studied at {level2.board}
                        </div>
                        <div className="row">
                          {
                            level2.state.map((level3) => {
                              return (
                                <>
                                  <div className="row">
                                    State name = {level3.name} & city is {level3.city}
                                  </div>
                                </>
                              )
                            })
                          }
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          )

        })
      }
    </div>
  )
}

export default UserList