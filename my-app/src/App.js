import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <Greet name={"Ankit"} designation={"Sr. Software Developer"} values={[10, 20, 30]} >
        <p>Hello, Gretting component</p>
      </Greet> */}
      {/* <Greet name={"Gorakh"} designation={"CEO"} values={[40, 50, 60]} />
      <Greet name={"Javscript"} designation={"kuchBHi"} values={[70, 80, 90]} />
      <Greet />
      <Greet /> */}
      {/* <Counter /> */}
      <Form />
    </div>
  );
}

export default App;
