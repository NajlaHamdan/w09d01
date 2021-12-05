import React from "react";
import { useState } from "react";
import axios from "axios";
import GetTodo from "../GetTodo";
// const BASE_URL = "http://localhost:4000";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const logIn = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((result) => {
        const tocken=result.data.token
        localStorage.setItem("user",tocken)
        console.log(result.data.token);
        console.log("succed");
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
