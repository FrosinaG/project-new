import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = ({user}) => {
  const [UserList, setUserlist] = useState();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUserlist(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const searchuser = (users) => {
    return users.filter(
      (item) =>
        item.firstName.toLowerCase().includes(UserList) ||
        item.lastName.toLowerCase().includes(UserList) ||
        item.email.toLowerCase().includes(UserList)
    );
  };

  if (!UserList) return null;
  const {
    users,
    id,
    firstName,
    lastName,
    maidenName,
    age,
    email,
    phone,
    image,
    birthDate,
  } = UserList;

  return (
    <>
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>{" "}
      <div className="userall">
        {users.map((item) => {
          // console.log(data);
          return (
            <div key={item.id} className="users-card">
              <div className="text-user">
                <p>
                  <b>First Name: </b>
                  {item.firstName}
                </p>
                <p>
                  <b>Last Name: </b>
                  {item.lastName}
                </p>
                <p>
                  <b>e-mail: </b>
                  {item.email}
                </p>
                <div className="view">
                  {" "}
                  <Link to={`/userlink/${item.id}`}>
                    View more about<b> {item.firstName}</b>
                  </Link>
                </div>
              </div>
              <div className="img-user">
                <img src={item.image} alt={firstName} className="u-img" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;
