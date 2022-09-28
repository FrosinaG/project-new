import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const value = { loading, setLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}

export { LoadingProvider, LoadingContext };
