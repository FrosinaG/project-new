import React from "react";
import { useEffect } from "react";

const Async = () => {
  const names = ["alexandra", "elena"];
  const taskOne = () => {
    console.log("taskOne");
  };
  const taskTwo = () => {
    console.log("taskTwo");
  };
  const myForEach = (array, cb) => {
    for (let i = 0; i < array.lenght; i++) {
      const element = array[i];
      cb(element);
    }
  };
  const readData = (name) => {
    console.log("name", name);
  };
  const functionReturnPoromise = () => {
    return new Promise((resolve, reject) => {
      const success = true;
      if (success) {
        setTimeout(() => {
          resolve({ messages: "This is resolve" });
        }, 5000);
      } else {
        setTimeout(() => {
          reject({ messages: "This is reject" });
        }, 5000);
      }
    });
  };
  const takeAsyncData = async () => {
    try {
      const hello = await functionReturnPoromise();
      console.log("hello", hello);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    takeAsyncData();
  }, []);
  return <div>Async</div>;
};

export default Async;
