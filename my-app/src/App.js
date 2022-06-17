import './App.css';
import React from 'react';
import Navbar from './components/RoutingComponents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/RoutingComponents/Home';
import About from './components/RoutingComponents/About';
import Company from './components/RoutingComponents/Company';
import User from './components/RoutingComponents/User';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="about" element={<About />}>
          <Route path="company" element={<Company />}></Route>
          <Route path="user" element={<User />}></Route>
        </Route>
      </Routes>
    </div>

  );
}

export default App;
