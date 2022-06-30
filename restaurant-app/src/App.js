import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import Header from './Components/Header';
import { Store } from './Redux/Store';
import { fetchRestaurants } from './Redux/Slice/RestaurantSlice';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Store.dispatch(fetchRestaurants())
  }, [])

  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
