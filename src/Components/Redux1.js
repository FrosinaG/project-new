import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Redux = () => {
  const store = useSelector((store) => store.payment, shallowEqual);

  console.log("store", store);



  return (
    <>
      <h1>{store.value}</h1>
      <Link to={"/redux"}>Redux</Link>
    
    </>
  );
};

export default Redux;
