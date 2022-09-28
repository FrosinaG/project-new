import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../Services/apiClient";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const user = (e) => {
    setUsername(e.target.value);
  };
  const pass = (e) => {
    setPassword(e.target.value);
  };
  const notify = (type, messages) =>
    toast[type](messages, {
      position: "top-right",
      autoClose: 5000,
      hidePRogressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });

  const apicall = (e) => {
    e.preventDefault();
 apiClient
      .post("https://dummyjson.com/auth/login ", {
        username: username,
        password: password,
      })
      .then((respones) => {
        console.log(respones.data);
        localStorage.setItem("token",JSON.stringify (respones.data.token))
        notify("success", "success");
        navigate("/");
      })
      .catch((error) => {
        notify("error", error.respones.data.messages);
        console.log("error", error);
      });
  };

  return (
    <div className="loginbox">
      <div className="loginboxin">
        <h2>Log in: </h2>
        <form onSubmit={apicall}>
          <label id="username">
            <b>User Name :</b>
          </label>
          <input className="loginin1"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={user}
          />
          <label id="pass">
            <b>Password:</b>
          </label>
          <input className="loginin1"
            type="password"
            name="password"
            id="pass"
            value={password}
            onChange={pass}
          />
          <button type="submit" className="blogin">
            <b> Log in</b>
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Login;
