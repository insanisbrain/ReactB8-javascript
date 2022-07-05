import logo from './logo.svg';
import './App.css';
import GlassProduct from './components/GlassProduct';
import EyeProduct from './components/EyeProduct';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <GlassProduct />
      <EyeProduct />
    </div>
  );
}

export default App;
