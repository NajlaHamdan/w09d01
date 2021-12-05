import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:4000";
const GetTodo = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    let id = "61ac9717bc01bd4bd3a4f03b";
    const result = await axios.get(`${BASE_URL}/getTodo/${id}`);
    console.log(result.data);
    if (result.data === "no todos for this user") {
      setTodo([]);
    } else {
      setTodo(result.data);
    }
  };
  const deleteTodo = async (itemId) => {
    const id = "61ac9717bc01bd4bd3a4f03b";
    console.log(itemId);
    const todoId = itemId;
    const result = await axios.delete(`${BASE_URL}/deleteTodo/${id}/${todoId}`);
    console.log(result.data);
    getTodos();
  };
  const createTask = async(e) => {
    e.preventDefault();
    const id = "61ac9717bc01bd4bd3a4f03b";//userId
    // const todoId="61acc1437063cd2253f029d4";
    console.log(e.target.task.value);
    const name=e.target.task.value;
    const result = await axios.post(`${BASE_URL}/createTodo`,{
      name, id
    });
    console.log(result);
    getTodos();
  };
  
  const update = (e) => {};
  return (
    <div>
      <form onSubmit=
            {createTask}>
        <input type="text" name="task" />
        <button>
          add task
        </button>
      </form>
      {todo.length
        ? todo.map((item) => (
            <div key={item._id}>
              <p>{item.name}</p>
              <button
                onClick={() => {
                  deleteTodo(item._id);
                }}
              >
                delete
              </button>
              <button onClick={() => update}>update</button>
            </div>
          ))
        : "no todos for this user"}
    </div>
  );
};

export default GetTodo;
