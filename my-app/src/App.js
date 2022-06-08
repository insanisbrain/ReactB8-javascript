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
import CounterOne from './components/useReducer/CounterOne';
import CounterTwo from './components/useReducer/CounterTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

let bigObject = {
  name: "ankit",
  age: 27,
  designation: []
}

function App() {
  return (
    <div className="App">
      {/* <CounterOne /> */}
      <CounterTwo />
    </div>
  );
}

export default App;
