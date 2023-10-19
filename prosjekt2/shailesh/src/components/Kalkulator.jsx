import { useState, useRef } from "react"
import Knapper from "./Knapper"
import Display from "./Display"
import "./Kalkulator.css"

const Kalkulator = () => {
    const extension = useRef(null)
    
    const knapper_list = [
        ["7", "8", "9", "*",], 
        [ "4", "5", "6", "/",],
        [ "3", "2", "1", "+",], 
        [ "extend", "0", "-", "=",]
    ]
    const ext_knapp_list = [
        ["(", ")", "^", ","],
 
    ]

    function regnutFunc(list) {


        
        return "hei"
    }

    const [item_list, setItem_list] = useState(["0"])
    const [answer_list, setAnswer_list] = useState(["0"])

    //console.log(item_list)
    const onClick = (txt) => {
        if (txt === "=") {
            const regnut = regnutFunc(item_list)
            setAnswer_list([regnut])
        }
            
        setItem_list( [...item_list, txt])
        
        
    }
    
    


    return (
        <div className="kalkulator">
      
            <Display value={item_list}/>
            <Display value={answer_list}/>
            { knapper_list.map(_innerText => (
                <div className="knappHorisontal">
                    {_innerText.map(txt => (
                        <Knapper onClick= {onClick} value={txt} type="normal" extref/> 

                    ))}
                </div>

                

            ))}
            { ext_knapp_list.map(_innerText => (
                <div className="knappHorisontal" id="knappExt" ref={extension}>
                    {_innerText.map(txt => (
                        <Knapper onClick= {onClick} value={txt} type="ext"/> 

                    ))}
                </div>

                

            ))}


            
        </div>
       
    );





}

export default Kalkulator