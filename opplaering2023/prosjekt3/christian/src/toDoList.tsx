import { ToDo } from "./App";

type Props = {
    liste: ToDo[]
    onDelete: (index: number)=>void;
}

const ToDoList = ({liste, onDelete}: Props) => {

    return (
        <>
            <div className = "liste">
                {liste.map((num: ToDo, i: number) => 
                    <div>
                        <input type = "checkbox" name = "komplett" onChange={e => num.completed = e.target.checked }/>
                        <label htmlFor = "komplett"> {num.content} </label>
                        <button onClick={() => onDelete(i)} type = "button"> Slett </button>
                    </div>
                )}
            </div>
        </>        
    )
}

export default ToDoList;