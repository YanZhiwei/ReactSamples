import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <Input defaultInput={'Hello World!'} />
      <Output />
    </div>
  );
}

export default App;
