import React, { useContext, useEffect } from "react";
import { Context } from "./NewContext";

const Context1 = () => {
  const { setBalls } = useContext(Context);
  useEffect(() => {
    setBalls(20);
    console.log("text", setBalls(20));
    return () => {};
  }, [setBalls]);

  return <div>Context1</div>;
};

export default Context1;
