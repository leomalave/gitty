import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

const root = ReactDOM.createRoot(document.getElementById("root"));


const handleChange = (e) => {
  console.log(e.target.value)
}

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludar"/>

    <form onSubmit={(e) => {
      e.preventDefault()
      alert('enviado')
    }}>
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
  </>
);
