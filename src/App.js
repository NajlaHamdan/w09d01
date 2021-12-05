import { Router } from "react-router";
import "./App.css";
import GetTodo from "./components/GetTodo";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Routes,Route }from "react-router-dom";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Logout/>
       <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<SignUp />} />
      </Routes>
      {/* <GetTodo /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
