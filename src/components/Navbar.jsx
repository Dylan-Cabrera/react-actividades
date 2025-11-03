import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <ul>
        <li>
            <Link to="/" > Acividad 1 </Link>
        </li>
        <li>
            <Link to="/2" > Acividad 2 </Link>
        </li>
        <li>
            <Link to="/3" > Acividad 3 </Link>
        </li>
    </ul>
    </>
  )
}
