
import "./Project.css"
import Inputfelt from "./Inputfelt"
import Todo from "./Todo"
import { useState } from "react";

const Project = () => {

    const [todo, setTodo] = useState([] as string[]);

    const onEnterFunc = (value: string) => {
  
        setTodo([...todo, value])

    }

    return (
        <div className="todo" >
            <Inputfelt onEnter={onEnterFunc}/>
            <Todo name="hei"/>



        </div>

    );

}

export default Project;