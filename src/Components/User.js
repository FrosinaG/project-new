import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";

const User = ({ user }) => {
  return (
    <>
      <div key={user.id} className="users-card">
        <div className="text-user">
          <p>
            <b>First Name: </b>
            {user.firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {user.lastName}
          </p>
          <p>
            <b>e-mail: </b>
            {user.email}
          </p>
          <div className="view">
            {" "}
            <Link to={`/userlink/${user.id}`}>
              View more about<b> {user.firstName}</b>
            </Link>
          </div>
        </div>
        <div className="img-user">
          <img src={user.image} alt={user.firstName} className="u-img" />
        </div>
      </div>
    </>
  );
};

export default User;
