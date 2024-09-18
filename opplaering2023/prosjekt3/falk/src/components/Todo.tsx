import "./Todo.css"

export type TodoProps = {
  value: string;
  checked: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

const Todo = ({ value, checked, onCheck, onDelete }: TodoProps) => {
  return (
    <div className="todoContainer">
      <input className="todoCheckBox" type="checkbox" onClick={onCheck} defaultChecked={checked} />
      <span className={`todoText ${checked && 'todoDone'}`}>{value}</span>
      <input className="todoDelete" type="button" value="Slett" onClick={onDelete} />
    </div>
  )
}

export default Todo;
