import './App.css'
import { useState } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export type TodoProps = {
  value: string,
  checked: boolean
}

function App() {
  const [todos, setTodos] = useState([] as TodoProps[]);

  const onAddTodo = (value: string) => {
    const newTodo = { value, checked: false };
    setTodos([...todos, newTodo]);
  }

  const onDelete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  const onCheck = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  }

  return (
    <div className="container">
      <h1 className="todoTitle">To-Do Liste</h1>
      <TodoInput onAdd={onAddTodo} />
      <TodoList todos={todos} onCheck={onCheck} onDelete={onDelete} />
      <p className="footerText">{`${todos.filter(t => t.checked).length}/${todos.length} oppgaver ferdig`}</p>
    </div>
  )
}

export default App
