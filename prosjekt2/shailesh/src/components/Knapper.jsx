import "./Knapper.css"
import { useRef } from "react";

const Knapper = ({value, onClick, type}) => {

    const extension = useRef(null);
    console.log(extension)
    const trykk = () => {
        onClick(value)
    };
 

    return (
        <div className="knapp" onClick={trykk} > 
            <div >
                {value}
            </div>
         </div>
    );

}


export default Knapper;