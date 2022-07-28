import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  education: '',
  designation: '',
  email: '',
  password: '',
  mobile: '',
  gender: '',
  hobbies: []
}

const CreateUser = () => {

  // Put your all use state here. 
  const [formState, setFormState] = useState(initialState);

  let params = useParams();
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState(Object.keys(params).length !== 0 ? true : false)

  useEffect(() => {
    if (editUser) {
      axios.get(`http://localhost:8000/user/${params?.id}`)
        .then((response) => updateUserFormData(response?.data))
        .catch((error) => console.log(error));
    }
  }, [])

  const updateUserFormData = (data) => {
    setFormState({ ...data });
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)
  }

  function isValidMobileNo(mobileNo) {
    return /^[0-9]{10}$/.test(mobileNo)
  }

  const validateForm = () => {

    console.log("formState", formState);

    if (formState.firstName === "") {
      return false;
    }

    if (formState.lastName === "") {
      return false;
    }

    if (formState.age === "" || Number(formState.age) <= 17) {
      return false
    }

    if (formState.education === "") {
      return false;
    }

    if (formState.designation === "") {
      return false;
    }

    if (formState.email === "" || !isValidEmail(formState.email)) {
      return false;
    }


    if (formState.password === '' || !isValidPassword(formState.password)) {
      return false;
    }

    if (formState.mobile === '' || !isValidMobileNo(formState.mobile)) {
      return false
    }

    if (formState.gender === '') {
      return false;
    }

    if (formState.hobbies.length <= 0) {
      return false;
    }


    // true --> form data valid
    // false --> form data invalid
    return true;
  }

  // All your function goes here...
  const createUser = () => {
    if (validateForm()) {

      if (editUser) {
        axios.put(`http://localhost:8000/user/${params?.id}`, formState)
          .then((response) => {
            let newState = { ...initialState };
            newState.hobbies = [];
            setFormState(newState);
            navigate('/');
          })
          .catch((error) => console.log(error))
      } else {
        axios.post('http://localhost:8000/user', formState)
          .then((response) => {
            let newState = { ...initialState };
            newState.hobbies = [];
            setFormState(newState);
          })
          .catch((error) => console.log(error))
      }


    }
  }

  const formValueChange = (event, fieldType) => {

    let newState = { ...formState };
    switch (fieldType) {
      // text
      case "FIRST_NAME":
        newState.firstName = event.target.value
        break;
      // text 
      case "LAST_NAME":
        newState.lastName = event.target.value
        break;
      // text
      case "EDUCATION":
        newState.education = event.target.value
        break;
      // email
      case "EMAIL":
        newState.email = event.target.value
        break;
      // number
      case "AGE":
        newState.age = event.target.value
        break;
      // password
      case "PASSWORD":

        newState.password = event.target.value
        break;
      // text
      case "MOBILE_NO":
        newState.mobile = event.target.value
        break;
      case "DESIGNATION":
        newState.designation = event.target.value
        break;
      case "GENDER":
        newState.gender = event.target.value;
        break;
      case "MOVIES":
        if (event.target.checked) {
          newState.hobbies.push("movies");
        } else {
          let indexOfMovie = newState.hobbies.indexOf("movies");
          if (indexOfMovie > -1) {
            newState.hobbies.splice(indexOfMovie, 1);
          }
        }
        break;
      case "GAMING":
        if (event.target.checked) {
          newState.hobbies.push("gaming");
        } else {
          let indexOfGaming = newState.hobbies.indexOf("gaming");
          if (indexOfGaming > -1) {
            newState.hobbies.splice(indexOfGaming, 1);
          }
        }
        break;
      case "CODING":
        if (event.target.checked) {
          newState.hobbies.push("coding");
        } else {
          let indexOfCoding = newState.hobbies.indexOf("coding");
          if (indexOfCoding > -1) {
            newState.hobbies.splice(indexOfCoding, 1);
          }
        }
        break;
      case "TRAVELLING":
        if (event.target.checked) {
          newState.hobbies.push("travelling");
        } else {
          let indexOfTravelling = newState.hobbies.indexOf("travelling");
          if (indexOfTravelling > -1) {
            newState.hobbies.splice(indexOfTravelling, 1);
          }
        }
        break;
      default:
        break;
    }
    setFormState({ ...newState });
  }

  const getLocalStorageData = () => {
    let data = localStorage.getItem("email");
    return data;
  }

  const removeLocalStorageData = () => {
    localStorage.removeItem("email");
  }

  return (
    <div>
      <h3>{!editUser ? 'Create' : 'Update'} Users = {getLocalStorageData()}</h3>
      <button onClick={() => removeLocalStorageData()}>Remove Email Local Storage</button>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">First Name *</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formState.firstName} onChange={(event) => formValueChange(event, "FIRST_NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Last Name *</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formState.lastName} onChange={(event) => formValueChange(event, "LAST_NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Age *</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" value={formState.age} onChange={(event) => formValueChange(event, "AGE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Education *</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formState.education} onChange={(event) => formValueChange(event, "EDUCATION")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Designation *</label>
        <div className="col-sm-10">
          <select className="form-control" value={formState.designation} onChange={(event) => formValueChange(event, "DESIGNATION")}>
            <option value="">Select</option>
            <option value="Software Developer">Software Developer</option>
            <option value="QA Engineer">QA Enginner</option>
            <option value="Manager">Manager</option>
            <option value="CEO">CEO</option>
          </select>
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Email *</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" value={formState.email} onChange={(event) => formValueChange(event, "EMAIL")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Password *</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" value={formState.password} onChange={(event) => formValueChange(event, "PASSWORD")} />
          <small>Minimum 8 Character, One Lower, One Upper , One special, One Number</small>
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Mobile No *</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" value={formState.mobile} onChange={(event) => formValueChange(event, "MOBILE_NO")} />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Gender *</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" checked={formState.gender === 'male'} value="male" onChange={(event) => formValueChange(event, "GENDER")} />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" checked={formState.gender === 'female'} value="female" onChange={(event) => formValueChange(event, "GENDER")} />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row my-2">
        <div className="col-sm-2">Hobbies * (atlease one)</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="movies" checked={formState.hobbies.includes('movies')} onChange={(event) => formValueChange(event, "MOVIES")} />
            <label className="form-check-label" >
              Movies
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="gaming" checked={formState.hobbies.includes('gaming')} onChange={(event) => formValueChange(event, "GAMING")} />
            <label className="form-check-label" >
              Gaming
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="coding" checked={formState.hobbies.includes('coding')} onChange={(event) => formValueChange(event, "CODING")} />
            <label className="form-check-label" >
              Coding
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="travelling" checked={formState.hobbies.includes('travelling')} onChange={(event) => formValueChange(event, "TRAVELLING")} />
            <label className="form-check-label" >
              Travelling
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row my-2">
        <div className="col-sm-10">
          <div>
            <button type="submit" className="btn btn-primary" onClick={() => createUser()}>{!editUser ? 'Create' : 'Update'} User</button>
          </div>
          <div>
            <small>Please enter mandatory values (*)</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateUser