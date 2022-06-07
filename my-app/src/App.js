import logo from './logo.svg';
import './App.css';
import Home from './components/RoutingComponents/Home';
import About from './components/RoutingComponents/About';
// Routing
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/RoutingComponents/Navbar';
import Order from './components/RoutingComponents/Order';
import ComponentC from './components/useContext/ComponentC';
import React from 'react';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

let bigObject = {
  name: "ankit",
  age: 27,
  designation: []
}

function App() {
  return (
    <>
      <UserContext.Provider value={"ankit"}>
        <ChannelContext.Provider value="Javascript">
          Hey I'm App JS!!
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
