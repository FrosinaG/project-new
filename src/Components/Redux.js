import React from "react";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addPayment,
  multiplePayment,
  removePayment,
  resetPayment,
} from "../state/actions/paymantAction";

const Redux = () => {
  const store = useSelector((store) => store.payment, shallowEqual);
  const dispatch = useDispatch();
  console.log("store", store);

  const increment = () => {
    dispatch(addPayment(1));
  };

  const decrement = () => {
    dispatch(removePayment(1));
  };
  const reset = () => {
    dispatch(resetPayment());
  };
  const multiple = () => {
    dispatch(multiplePayment(8));
  };

  return (
    <><div className="redux">
      <h1 className="redux-res">{store.value}</h1>
      <button onClick={increment}className="redux-button">INCREMENTE</button>
      <br/>
      <button onClick={decrement}className="redux-button">MINUS</button>   <br/>
      <button onClick={reset}className="redux-button">RESET</button>   <br/>
      <button onClick={multiple}className="redux-button">MULTIPLE</button>   <br/>
      <Link to={"/redux1"}>Redux1</Link></div>
    </>
  );
};

export default Redux;
