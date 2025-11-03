import { Navigate, Outlet } from 'react-router-dom'

export const PublicRouter = () => {
    const isLogged = localStorage.getItem("isLogged")
  return !isLogged ? <Outlet/> : <Navigate to="/1" />
}