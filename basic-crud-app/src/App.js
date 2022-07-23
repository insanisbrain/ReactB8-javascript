// import './App.css';

import CreateUser from "./Components/CreateUser";
import UserList from "./Components/UserList";
import { Routes, Route, NavLink } from "react-router-dom";
import NavMenu from "./Components/NavMenu";

/**
 * 
 * SAMPLE JSON DATA
 * 
 * "id": 1,
 * "firstName": "Ankit", || Input - Text
 * "lastName": "Varia",  || Input - Text
 * "age": 27, || Input - Number
 * "education": "Master IT", || Input - Text
 * "designation": "Sr. Software Developer", || Input - Select
 * "email": "ankit.varia@gmail.com", || Input - Email
 * "mobile": "8780105205", || Input - number
 * "gender": "male", || Input - Radio 
 * "hobbies": ["Coding", "Movies"] || Input - Checkbox
 * 
 */

function App() {
  return (
    <div className="App">




      <div className="container">
        <NavMenu />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
        {/* <div className="row">
          <div className="col-12">
            <h3>CRUD APPLICATION</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <UserList />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CreateUser />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
