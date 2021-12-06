import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import GetTodo from "../GetTodo";
// const BASE_URL = "http://localhost:4000";

const Login = () => {
  const [token, setToken] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("user");
    const id = localStorage.getItem("id");
    // console.log(token);
    setToken(token);
    setId(id);
  }, []);
  const logIn = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((result) => {
        const token = result.data.token;
        const id = result.data.result._id;
        localStorage.setItem("user", token);
        localStorage.setItem("id", id);
        console.log(token, id);
        navigate(`/getTodo`);
        setToken(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={logIn} method="post">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">sign in</button>
      </form>
    </div>
  );
};

export default Login;
