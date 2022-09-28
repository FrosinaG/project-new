import React, { useEffect, useState } from "react";
import FormTodo from "./FromTodo";
import Todo from "./Todo";

const ListTodo = () => {
  // const setInitalState = () => {
  //   const local = localStorage.getItem("todo");
  //   try {
  //     return JSON.parse(local);
  //   } catch (error) {
  //     return [];
  //   }
  // };
  const [toDoes, setToDoes] = useState(
    JSON.parse(localStorage.getItem("todo"))
      ? JSON.parse(localStorage.getItem("todo"))
      : []
  );

  const addTodo = (todo) => {
    console.log("todo", todo);
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...toDoes];
    setToDoes(newTodos);
    console.log(toDoes);
  };
  useEffect(() => {
    console.log("toDoes", toDoes);
    localStorage.setItem("todo", JSON.stringify(toDoes));
  }, [toDoes]);

  const markDone = (id) => {
    const markArr = toDoes.map((item) => {
      console.log("item", item, id);
      if (item.id === id) {
        item.done = !item.done;
        return item;
      }
      return item;
    });
    setToDoes(markArr);
  };
  const removeTodo = (id) => {
    const removearr = toDoes.filter((todo) => todo.id !== id);
    setToDoes(removearr);
  };

  return (
    <div className="alltodo">
      <h2 className="h-todo"> Create your to do list !!!</h2>
      <FormTodo onSubmit={addTodo} />
      <Todo toDoes={toDoes} removeTodo={removeTodo} markDone={markDone} />
    </div>
  );
};
export default ListTodo;
