import { useState } from "react";
import {LosSimpsons } from "./LosSimpsons";
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  const [user, setUser] = useState("")
  const handleLogin = (username) => {
    setUser(username)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route/>
        <Route path="/tarea3" element={LosSimpsons}/>
        <Route/>
      </Routes>
    </BrowserRouter>

    //HAY QUE MOVER TODO ESTO 
    // <>
    //   <h1>¡Hola de nuevo {user}!</h1>
    //   <Login onLogin={handleLogin}/>
    //   <br />
    //   <br />
    //   <Register/>
    //   <br />
    //   <button onClick={() => {handleLogin("")}}> Logout </button>
    // </>
    //ApiHooks()
  );
}

export default App;
