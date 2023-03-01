import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

   const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

   const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

   const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

   const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="header">Today's To Do</h1>

     
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default Todo;
