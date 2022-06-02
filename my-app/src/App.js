import logo from './logo.svg';
import './App.css';
import Home from './components/RoutingComponents/Home';
import About from './components/RoutingComponents/About';
// Routing
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/RoutingComponents/Navbar';
import Order from './components/RoutingComponents/Order';


function App() {
  return (
    // <div className="App">
    //   <Home />
    //   <About />
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/order-summary" element={<Order />}></Route>
      </Routes >
    </>
  );
}

export default App;
