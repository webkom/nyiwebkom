
import "./Inputfelt.css"
import React, { KeyboardEvent } from 'react';

type Props = {
    onEnter: (value: string) => void;
}
const Inputfelt = ({onEnter}:Props) => {
    

    const onKey = (e:KeyboardEvent<HTMLImageElement>) => {
        console.log(e.key, e.target.value, e.key=="enter")
        if (e.key == "Enter") {
            onEnter(e.target.value)
  
        }
    }

    return (
        <div className="input" >
            <input type="text" id="felt" onKeyDown={onKey} />
            
        </div>

    );

}

export default Inputfelt;