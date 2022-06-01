import logo from './logo.svg';
import './App.css';
import HookCounter from './components/useEffect/HookCounter';
import DataFetch from './components/useEffect/DataFetch';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      <DataFetch />
    </div>
  );
}

export default App;
