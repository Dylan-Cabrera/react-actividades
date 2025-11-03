import { Link } from "react-router-dom"
import "../assets/css/Navbar.css"

export const Navbar = () => {
  return (
    <>
    <ul id="navbar">
        <li>
            <Link to="/firstapp" > Acividad 1 </Link>
        </li>
        <li>
            <Link to="/form" > Acividad 2 </Link>
        </li>
        <li>
            <Link to="/api" > Acividad 3 </Link>
        </li>
    </ul>
    </>
  )
}
