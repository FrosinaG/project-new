import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../hooks/useContextuser";
import useUsers from "../hooks/useUsers";
import User from "./User";

const Search = () => {
  const [userList, setUserlist] = useState();
  const [foundUser, setFoundUser] = useState();
  const url = "https://dummyjson.com/users";
  const { data } = useUsers(url);

  useEffect(() => {
    if (data) setUserlist(data);
  }, [data]);

  const searchUser = (value) => {
    if (!value) {
      setFoundUser(null)
      return
    }
    const user = userList.find(
      (item) =>
        item.firstName.toLowerCase().includes(value) ||
        item.lastName.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value)
    );
    setFoundUser(user)
  };

  return (
    <>
      <div className="search">
        {" "}
        <input
          type="text"
          className="search-in"
          placeholder="Search...."
          onChange={(e) => searchUser(e.target.value)}
        />
      </div>
      <div>
        {
          foundUser ? <User user={foundUser} /> : null            
        }
      </div>
    </>
  );
};

export default Search;
