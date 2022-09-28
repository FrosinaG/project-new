import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../Components/LoadingContext";

const useContextuser = (url) => {
  const [data, setData] = useState();


  const userData = async () => {
  
    try {
      const data = await axios.get(url);
      setTimeout(() => {
        setData(data.data);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userData();
  }, [url]);



  return { data };
};

export default useContextuser;
