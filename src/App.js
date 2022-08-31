import './App.css';
import './Style/Screen.css';
import logo from './img/logo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };
  
  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
        src={logo}
        className='logo'
        alt='Calculator logo' />
      </div>
      <div
      className='calculator-container' >
        <Screen input={input}/>
        <div className='fila'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button clickHandler={calculateResult}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton clearHandler={() => setInput('')} >Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
