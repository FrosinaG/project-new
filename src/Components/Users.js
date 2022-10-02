import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import User from "./User";

const Users = ({ user }) => {
  const [userList, setUserlist] = useState();
  const url = "https://dummyjson.com/users";
  const { data } = useUsers(url);

  const searchuser = (users) => {
    return users.filter(
      (item) =>
        item.firstName.toLowerCase().includes(userList) ||
        item.lastName.toLowerCase().includes(userList) ||
        item.email.toLowerCase().includes(userList)
    );
  };
  useEffect(() => {
    if (data) setUserlist(data);
  }, [data]);

  if (!userList) return null;
  const {
    id,
    firstName,
    lastName,
    maidenName,
    age,
    email,
    phone,
    image,
    birthDate,
  } = userList;

  return (
    <>
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>{" "}
      <div className="userall">
        {userList.map((item) => {
          // console.log(data);
          return (
            <User user={item} key={item.id} />
          );
        })}
      </div>
    </>
  );
};

export default Users;