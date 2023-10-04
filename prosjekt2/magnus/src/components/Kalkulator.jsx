import { useState } from "react";

const Kalkulator = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(0)

    const Summ = () => {
        setResult(number1 + number2)
    }
    
    return(
        <div>
           <input type="number" onChange={event => setNumber1(parseInt(event.target.value))} />
           <input type="number" onChange={event => setNumber2(parseInt(event.target.value))}/>
           <button onClick={Summ}>REGN UT</button>
           <p>Resultat: {result}</p>
        </div>
    )
}

export default Kalkulator;