import React, { useState } from 'react'

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

  // All your function goes here...
  const createUser = () => {
    console.log("Form State", formState);
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
      default:
        break;
    }
    setFormState({ ...newState });
  }

  return (
    <div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">First Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "FIRST_NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Last Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "LAST_NAME")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Age</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" onChange={(event) => formValueChange(event, "AGE")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Education</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "EDUCATION")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Designation</label>
        <div className="col-sm-10">
          <select className="form-control" onChange={(event) => formValueChange(event, "DESIGNATION")}>
            <option>Software Developer</option>
            <option>QA Enginner</option>
            <option>Manager</option>
            <option>CEO</option>
          </select>
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="email" className="form-control" onChange={(event) => formValueChange(event, "EMAIL")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" onChange={(event) => formValueChange(event, "PASSWORD")} />
        </div>
      </div>
      <div className="form-group row my-2">
        <label className="col-sm-2 col-form-label">Mobile No</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" onChange={(event) => formValueChange(event, "MOBILE_NO")} />
        </div>
      </div>
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
              <label className="form-check-label" htmlFor="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
              <label className="form-check-label" htmlFor="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="form-group row my-2">
        <div className="col-sm-2">Hobbies</div>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Movies
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Gaming
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Coding
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck1" />
            <label className="form-check-label" htmlFor="gridCheck1">
              Travelling
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row my-2">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary" onClick={() => createUser()}>Create User</button>
        </div>
      </div>
    </div>
  )
}

export default CreateUser