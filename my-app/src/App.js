import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name={"Ankit"} designation={"Sr. Software Developer"} values={[10, 20, 30]} >
        <p>Hello, Gretting component</p>
      </Greet>
      {/* <Greet name={"Gorakh"} designation={"CEO"} values={[40, 50, 60]} />
      <Greet name={"Javscript"} designation={"kuchBHi"} values={[70, 80, 90]} />
      <Greet />
      <Greet /> */}
    </div>
  );
}

export default App;
