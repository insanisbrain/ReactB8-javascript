import './App.css';
import React from 'react';
import DataFetching from './components/useReducer/DataFetching';
import FocusInput from './components/useRef/FocusInput';
import Counter from './components/useMemo/Counter';
import List from './components/KeyList/List';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <List />
    </div>
  );
}

export default App;
