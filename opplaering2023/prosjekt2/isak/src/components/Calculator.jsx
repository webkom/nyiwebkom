import { useState } from "react";





const Calculator = (props) => {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [answer, setAnswer] = useState(0);

    const calculate = () => {
        switch (props.operation) {
            case "ADD":
                setAnswer(numberOne + numberTwo)
                break;
            case "SUBTRACT":
                setAnswer(numberOne - numberTwo)   
                break;
            default:
                return 0
        }

    }


    return (
        <>
            <h2>KALKULATOR</h2>
            <input type="number" onChange={e => setNumberOne(parseInt(e.target.value))} />
            <input type="number" onChange={e => setNumberTwo(parseInt(e.target.value))} />
            <button onClick={calculate}>BEREGN</button>
            <div>SVAR: {answer}</div>
        </>
    )
}



export default Calculator;