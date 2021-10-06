import React, { useContext, useEffect, useRef, useState } from "react";
import { TodoList } from "../TodoContext";

const TodoForm = (props) => {
  const { edit } = useContext(TodoList);

  const [text, setText] = useState(edit ? edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSub({
      id: Math.floor(Math.random() * 10000),
      text: text,
    });
    setText("");
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
    <form onSubmit={submitHandler} className='todo-form'>
      {props.edit ? (<><input
        type="text"
        name="text"
        placeholder="Update Todo"
        value={text}
        onChange={changeHandler}
        ref={inputRef}
        className='todo-input edit'
      ></input>
      <button onClick={submitHandler} className='todo-button edit'>Update</button></>) : (<><input
        type="text"
        name="text"
        placeholder="Enter a todo"
        value={text}
        onChange={changeHandler}
        ref={inputRef}
        className='todo-input'
      ></input>
      <button onClick={submitHandler} className='todo-button'>Add Todo</button></>)}
      
    </form>
  </>
  );
};

export default TodoForm;
