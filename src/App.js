import { Router } from "react-router";
import "./App.css";
import GetTodo from "./components/GetTodo";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Routes,Route }from "react-router-dom";
import Logout from "./components/Logout";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Logout/>
       <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/getTodo" element={<GetTodo />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      {/* <GetTodo /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
