import { useCallback, useEffect, useState, useContext } from "react";
import axios from "axios";

const useUsers = (url) => {
  const [data, setData] = useState();

  const fetchUsers = async () => {
    try {
      const data = await axios.get(url);
      setData(data.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    if (url) {
      fetchUsers();
    }
  }, [url]);

  return { data };
};

export default useUsers;