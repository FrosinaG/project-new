import React, { useEffect, useRef, useState } from "react";

const FormTodo = (props) => {
  const [todo, setTodoes] = useState("");

  const todoRef = useRef(null);
  const hendleChange = (e) => {
    setTodoes(e.target.value);
  };

  const hendles = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: todo,
      done: false,
    });
    setTodoes("");
  };

  return (
    <div className="alltodo1">
      <form className="in-todo" onSubmit={hendles}>
        <input
          onChange={hendleChange}
          className="inputtodo"
          type="text"
          placeholder="Type what to do today....."
          name="todo"
          id="todo"
          value={todo}
          ref={todoRef}
        />
        <button className="todo-button">
          <b>+ Add to list</b>
        </button>
      </form>
    </div>
  );
};
export default FormTodo;
