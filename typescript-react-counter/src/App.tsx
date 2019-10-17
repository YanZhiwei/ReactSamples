import * as React from 'react';
import './App.css';
// import CounterSample1 from './components/CounterSample1';
import CounterSample2 from './components/CounterSample2';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CounterSample2 value={1} />
      </div>
    );
  }
}

export default App;
