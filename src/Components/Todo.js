import React, { useState } from "react";
import FormTodo from "./FromTodo";
import ListTodo from "./ListTodo";
import { CgCloseR } from "react-icons/cg";
import { MdDone } from "react-icons/md";

const Todo = ({ toDoes, markDone, removeTodo }) => {
  const [input, setInput] = useState({ id: null, value: "" });

  return toDoes.map((todo1, index) => (
    <div className={todo1.done ? "lista done" : 'lista'}key={index}>
      <div className="list-text">
        <p>{todo1.text}</p>
      </div>
      <div className="icons">
        <p>
          <MdDone onClick={() => markDone(todo1.id)} className="mark" />
        </p>
      </div>
      <div className="icons">
        <p>
          <CgCloseR onClick={() => removeTodo(todo1.id)} className="delete" />
        </p>
      </div>
    </div>
  ));
};

export default Todo;
