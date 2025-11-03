import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useForm } from "../hooks/useForm";
import { Navbar } from "../components/Navbar";


export const Formulario = () => {
  const [user, setUser] = useState("")

  const handleLogin = (username) => {
    setUser(username)
  }
  
  return (
    <>
    <Navbar/>
      <h1>¡Hola de nuevo {user}!</h1>
      <Login onLogin={handleLogin}/>
      <br />
      <br />
      <Register/>
      <br />
      <button onClick={() => handleLogin("")}> Logout </button>
    </>
  );
}
