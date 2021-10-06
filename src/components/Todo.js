import React, { useContext } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoList } from "../TodoContext";
import TodoForm from "./TodoForm";

const Todo = () => {
  const { todos, setTodos, edit, setEdit } =
    useContext(TodoList);

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    
      const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos((prev) =>
          prev.map((item) => (item.id === todoId ? newValue : item))
        );
      };

      const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
          id: null,
          value: "",
        });
      };
    
      const removeTodo = (id) => {
        let removeArr = [...todos].filter((todo) => todo.id !== id);
    
        setTodos(removeArr);
      };



  if (edit.id) {
    return <TodoForm onSub={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo, i) => {
        return (
          <div
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
            key={i}
          >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <RiCloseCircleFill
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
              <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
