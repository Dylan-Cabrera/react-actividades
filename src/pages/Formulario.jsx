import { useState } from "react";
import { Login } from "../components/Login";
import {Register} from "../components/Register"
import { NavBar } from "../components/NavBar";
import "../assets/css/form.css";

export const Formulario = () => {
  const [user, setUser] = useState("")
  const handleLogin = (username) => {
    setUser(username)
  }
  
  return ( 
    <>
      <NavBar/>
      {user ? <h1>¡Hola de nuevo {user}! </h1> : <h1>¡Hola de nuevo! </h1>}
      
      <div id="forms">

      <Login onLogin={handleLogin}/>
      <br />
      <br />
      <Register/>
      </div>
      <br />
      <button className="logout" onClick={() => {handleLogin("")}}> Logout </button>
    </>
  );
}
