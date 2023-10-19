import "./Display.css"
import { useRef } from "react";

const Display = ({value}) => {

   
 
    const input = value.join("")
    return (
        <div className="Display"> 
            <h1>{input}</h1>
         </div>
    );

}


export default Display;