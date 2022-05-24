import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import World from './components/world';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Hello />
      <World />
      <Welcome />
    </div>
  );
}

export default App;
