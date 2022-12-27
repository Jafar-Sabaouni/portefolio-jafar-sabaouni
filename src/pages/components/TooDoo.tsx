import React, { useState } from "react";
import ToDoList from "./TooDooList";
import ToDoInput from "./TooDooInput";
interface TodoItem {
  name: string;
  completed: boolean;
}
const TooDoo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const addTodo = (todo: string) => {
    setTodos([...todos, { name: todo, completed: false }]);
  };
  const markCompleted =(index: number, completed: boolean)=>{
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: completed } : todo));
  }
  return (
    <div>
      <ToDoInput onAddClick={addTodo}/>
      
      <ToDoList todos={todos} onMarkCompleted={markCompleted} />
      
    </div>
  );

}

export default TooDoo;