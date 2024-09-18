import { TodoProps } from "../App";
import Todo from "./Todo";
import "./TodoList.css"

export type TodoListProps = {
  todos: TodoProps[];
  onDelete: (index: number) => void;
  onCheck: (index: number) => void;
};

const TodoList = ({ todos, onDelete, onCheck }: TodoListProps) => {
  return (
    <div className="todoList">
      {todos.map((todo, i) => <Todo key={`${todo}${i}`} checked={todo.checked} value={todo.value} onCheck={() => onCheck(i)} onDelete={() => onDelete(i)} />)}
    </div>
  )
}

export default TodoList;
