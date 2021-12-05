import React from "react";
import { useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:4000";
const SignUp = () => {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
  const [role, setRole] = useState("61ac96cfbc01bd4bd3a4f037");

  const signUp =  (e) => {
    e.preventDefault();
    console.log(role);
    axios.post(`${BASE_URL}/createUser`, {
      email:e.target.email.value,
      password:e.target.password.value,
      role,
    }).then((result)=>{
        console.log(result.data);
    }).catch((err)=>{
        console.log(err);
    });
  };
  return (
    <div>
      <form onSubmit={signUp} method="post">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
