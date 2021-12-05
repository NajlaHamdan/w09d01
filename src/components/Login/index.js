import React from "react";
import { useState } from "react";
import axios from "axios";
import GetTodo from "../GetTodo";
const BASE_URL = "http://localhost:4000";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const logIn = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((result) => {
        console.log(result.data);
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
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default Login;
