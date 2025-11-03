import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul>
        <li>
            <Link to="/"> Inicio </Link>
            <Link to="/tarea1"> Tarea 1 </Link>
            <Link to="/tarea2"> Tarea 2 </Link>
            <Link to="/tarea3"> Tarea 3 </Link>
        </li>
    </ul>
  )
}
