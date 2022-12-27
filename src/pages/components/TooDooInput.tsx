import React, { useState } from "react";
interface ToDoInputProps {
    onAddClick: (value: string) => void;
  };
  const ToDoInput = ({ onAddClick }: ToDoInputProps) => {
    const [todo, setTodo] = useState<string>("");
  
    return (
      <div>
          <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)} />
          <button onClick={() => onAddClick(todo)}>Add</button>
      </div>
    )
  }
export default ToDoInput;