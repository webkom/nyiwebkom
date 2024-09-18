import { useState } from "react";
import "./TodoInput.css"

export type TodoInputProps = { 
  onAdd: (value: string) => void;
};

const Todo = ({ onAdd }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="todoContainer">
      <input className="todoInput" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      <button className="todoAdd" onClick={() => onAdd(inputValue)}>+</button>
    </div>
  )
}

export default Todo;
