import { useState } from "react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useForm } from "../hooks/useForm";


function App() {
  const [user, setUser] = useState("")
  const handleLogin = (usename) => {
    setUser(usename)
  }
  
  return (
    <>
      <h1>¡Hola de nuevo {user}!</h1>
      <Login onLogin={handleLogin}/>
      <br />
      <br />
      <Register/>
      <br />
      <button onClick={() => {user= username}}> Logout </button>
    </>
  );
}

export default App;
