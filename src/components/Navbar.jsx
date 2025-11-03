import { Link } from "react-router-dom";
import "../assets/css/Navbar.css"

export const NavBar = () => {
  return (
    <div id="navbar">

    <ul>
        <li>
            <Link to="/firstapp"> Tarea 1 </Link>
            <Link to="/form"> Tarea 2 </Link>
            <Link to="/api"> Tarea 3 </Link>
        </li>
    </ul>
    </div>
  )
}
