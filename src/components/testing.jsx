import { useReducer, useState } from "react";
import "./testing.css";

export default function Testing() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Students");

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function changeName(value) {
    setName(value);
  }

  return (
    <div className="background">
      <h1>{name}</h1>
      <div>
        <button className="val" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button className="val" onClick={increment}>
          +
        </button>
      </div>
      <div className="button-panel">
        <button onClick={() => changeName("Students")}>Students</button>
        <button onClick={() => changeName("Teachers")}>Teachers</button>
        <button onClick={() => changeName("Admins")}>Admins</button>
      </div>
    </div>
  );
}
