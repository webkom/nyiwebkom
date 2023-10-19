import { useState } from 'react';
import './App.css';
import SkrivIn from './skrivIn';
import TlfKnapp from './tlfKnapp';

function App() {

  const [ut, setUt] = useState(0)
  const [tall1, setTall1] = useState(0);
  const [tall2, setTall2] = useState(0);

  const [operasjon, setOperasjon] = useState("ADD");

  const test =  ["Første Tall", "Andre Tall"];
  const knapper = [0,1,2,3,4,5,6,7,8,9]
  const [knappVerdi, setKnappVerdi] = useState("");
  
  // const function regnUt 

  return (
    <div className="App">
      <header className="App-header">

        <h1>
          TEST
        </h1>

        <select onChange={e => setOperasjon(e.target.value)}>

          <option>ADD</option>
          <option>SUBSTRACT</option>

        </select>

        <SkrivIn skrift = {test[0]} set={setTall1}/>
        <SkrivIn skrift = {test[1]} set={setTall2}/>

        <p> Svaret er: {(operasjon === "ADD") ? tall1 + tall2 : tall1 - tall2}</p>

        {/* knappe div */}
        <TlfKnapp nummer = {knapper} verdi={knappVerdi} set = {setKnappVerdi}/>
        <p> {knappVerdi}</p>

      </header>
    </div>
  );
}

export default App;
