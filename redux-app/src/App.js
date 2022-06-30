import './App.css';
import { decrementCounter, increaseCounter } from './redux/Counter/counter.actions';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <div>Count: {props.count}</div>
      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decrementCounter()}>Decrease Count</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decrementCounter: () => dispatch(decrementCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
