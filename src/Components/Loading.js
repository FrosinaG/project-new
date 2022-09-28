import React, { useContext, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { LoadingContext } from "./LoadingContext";
import todo from "./Newtodo";

const Loading = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  if (!loading) return null;
  return (
    <div className="loading">
      <FadeLoader className="loading-spi" />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
