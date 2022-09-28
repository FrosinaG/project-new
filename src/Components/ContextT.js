import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "./NewContext";

const ContextT = () => {
  const { setBalls,balls, changeBalls } = useContext(Context);

  useEffect(() => {
    setBalls(15);
  }, []);

  return (
    <div>
      <h1>
        <Link to="/context1">Set New value</Link>
      </h1>
    </div>
  );
};

export default ContextT;
