import axios from "axios";
import React, { useState, CSSProperties } from "react";
import useNewtodo from "../hooks/useNewtodo";
import {useLoading} from "../Components/LoadingContext";


const Newtodo = () => {
  // const { todo } = useNewtodo("https://jsonplaceholder.typicode.com/todos")
  const urlCall = "https://jsonplaceholder.typicode.com/posts";
  const { todo } = useNewtodo(urlCall);
  // const { loading, setLoading } = useLoading();
  if (!todo) return null;

  return (
    <div>
      {" "}
    
      {todo.map((singletodo) => {
        return (
          <div key={singletodo.id}>
            <h2>{singletodo.title}</h2>
            
          </div>
        );
      })}
    </div>
  );
};

export default Newtodo;
