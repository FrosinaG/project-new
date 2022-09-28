import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Users from "./Users";
import { Link } from "react-router-dom";

const Userlink = ({ data }) => {
  let { id } = useParams();
  let location = useLocation();

  const [userlink, setuserlink] = useState();
  console.log(useParams());

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((data) => setuserlink(data.data));
  }, [id]);

  if (!userlink) return null;
  const {
    firstName,
    lastName,
    maidenName,
    age,
    email,
    phone,
    image,
    birthDate,
  } = userlink;
  return (
    <>
    <Link to={"/"}><button className="back">Back</button></Link>
    
      <div className="users-card1">
        <div className="u-text">
        
          <p>
            <b>First Name: </b>
            {firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {lastName}
          </p>
          <p>
            <b>Maiden Name: </b>
            {maidenName}
          </p>
          <p>
            <b>Age: </b>
            {age}
          </p>
          <p>
            <b>Phone: </b>
            {phone}
          </p>
          <p>
            <b>Birth Date: </b>
            {birthDate}
          </p>
          <p>
            <b>Email: </b>
            {email}
          </p>
        </div>
        <div className="user-img1">
          <img src={image} alt={firstName} className="u-img1" />
        </div>
      </div>
      <div className="user-button">
      <Link to={`/userlink/${parseInt(id)-1}`}>
          <button className="u-b">Preview</button>{" "}
        </Link>
        <Link to={`/userlink/${parseInt(id)+1}` }>
          <button className="u-b">Next</button>{" "}
        </Link>

       
      </div>
    </>
  );
};

export default Userlink;
