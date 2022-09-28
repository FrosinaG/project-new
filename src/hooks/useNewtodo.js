import { useCallback, useEffect, useState, useContext } from "react";
import axios from "axios";

import { LoadingContext } from "../Components/LoadingContext";
// import {setLoading} from "../Components/LoadingContext";

const useNewtodo = (url) => {
  const [todo, setTodo] = useState();
  const { loading, setLoading } = useContext(LoadingContext);

  const takeTodo = useCallback(async () => {
    setLoading(true);
    const data = await axios.get(url);
    setTimeout(() => {
      setTodo(data.data);
    }, 5000);
  }, [url]);

  useEffect(() => {
    takeTodo();
  }, [takeTodo]);

  useEffect(() => {
    if (todo) setLoading(false);
  }, [todo]);

  return { todo };
};

export default useNewtodo;
