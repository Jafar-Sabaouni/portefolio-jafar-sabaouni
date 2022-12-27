import React from "react";

interface TodoItem {
  name: string;
  completed: boolean;
}

interface toDoListProps {
  todos: TodoItem[]
  onMarkCompleted: (index: number, completed: boolean) => void;
}

const ToDoList = ({ todos ,onMarkCompleted }: toDoListProps) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" checked={todo.completed} onChange={(event) => onMarkCompleted(index, event.target.checked)} />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.name}</span>
        </div>
      ))}
    </div>)
}

export default ToDoList;