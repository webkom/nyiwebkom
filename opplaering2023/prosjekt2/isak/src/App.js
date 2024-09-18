import './App.css';
import Calculator from './components/Calculator';
import { useState } from 'react';

function App() {
  const [operation, setOperation] = useState("ADD");

  return (
    <>
      <h1>Kalkulator</h1>


      <h2>Velg type beregning</h2>
      <select onChange={e => setOperation(e.target.value)}>
        <option>ADD</option>
        <option>SUBTRACT</option>
      </select>

      <h2>Sett tallene du vil beregne</h2>
      <Calculator operation={operation} />
    </>
  );
}

export default App;
