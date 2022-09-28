import { useState, useMemo, createContext, useEffect } from "react";

const Context = createContext();

function ContextProveder({ children }) {
  const [balls, setBalls] = useState(15);

  useEffect(() => {
    console.log("balls", balls);
  }, [balls]);

  const changeBalls = (n) => {
    setBalls(n);
  };
  const value = useMemo(
    () => ({
      setBalls,
      balls,
      changeBalls,
    }),
    [balls]
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export { ContextProveder, Context };
