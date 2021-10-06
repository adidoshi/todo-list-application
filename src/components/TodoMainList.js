import React, { useContext, useEffect } from "react";
import { TodoList } from "../TodoContext";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoMainList = () => {
  const { todos, setTodos } = useContext(TodoList);

  useEffect(() => {
    const temp = localStorage.getItem("todos2");
    let initialTodos = JSON.parse(temp);

    if (initialTodos) {
      setTodos(initialTodos);
    }
  }, [setTodos]);

  useEffect(() => {
    let temp = JSON.stringify(todos);
    localStorage.setItem("todos2", temp);
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-app">
        <h1>What's the plan for today?</h1>
        <TodoForm onSub={addTodo} />
        <Todo />
      </div>
    </>
  );
};

export default TodoMainList;
