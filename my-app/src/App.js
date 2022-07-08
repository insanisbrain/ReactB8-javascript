import './App.css';
import React from 'react';
import Welcome from './components/props/welcome';
import Navbar from './components/RoutingComponents/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/RoutingComponents/Home';

function App() {

  return (
    <div className="App">
      {/* <Welcome age={27} /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="welcome" element={<Welcome />}></Route>
      </Routes>
    </div>

  );
}

export default App;
