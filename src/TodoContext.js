import React, { createContext, useState } from "react";

export const TodoList = createContext();

const TodoContext = (props) => {
  const [todos, setTodos] = useState([]);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return (
    <div>
      <TodoList.Provider value={{ todos, setTodos, edit, setEdit }}>
        {props.children}
      </TodoList.Provider>
    </div>
  );
};

export default TodoContext;
