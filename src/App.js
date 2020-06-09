import React, { useState } from 'react';
import Todos from "./Todos";
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "buy some milk"}, 
    { id: 2, content: "play mario kart"},
  ])

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos( newTodos )
   }

   const addTodo = (content) => {
    let newTodo = { id: Math.random(), content: content }
    setTodos([...todos, newTodo])
   }

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
        <Todos todos={ todos } deleteTodo={ deleteTodo } />
        <AddTodo addTodo={ addTodo } />
    </div>
  );
}

export default App;
