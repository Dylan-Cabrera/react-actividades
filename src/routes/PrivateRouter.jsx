import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRouter = () => {
    const isLogged = localStorage.getItem("isLogged")
  return isLogged ? <Outlet/> : <Navigate to="/2" />
}
