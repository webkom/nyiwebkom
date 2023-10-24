import { useState } from 'react'
import './App.css'
import ToDoList from './toDoList'

type ToDo = {
  content: string;
  completed: boolean;
}

function App() {

  const [liste, setListe] = useState<ToDo[]>([]);
  const [skriv, setSkriv] = useState<string>("");

  const lagElement = (todo: string) => {
    const newTodo: ToDo = {
      content: todo,
      completed: false
    }
    setListe([...liste, newTodo])
  }

  const onDelete = (index: number) => {
    const nyListe = [...liste]
    nyListe.splice(index, 1)
    setListe(nyListe)
  }

  return (
    <>
      <h1> To-Do List </h1>

      <input placeholder="Hva skal gjøres?" value = {skriv} onChange={e => setSkriv(e.target.value)}/>

      <button name = "knapp" type = "submit" onClick={() => {
        lagElement(skriv) 
        setSkriv("")
        }}> + </button>

      <ToDoList onDelete = {onDelete} liste={liste} />
    </>
  )
}

export default App
export type {ToDo}