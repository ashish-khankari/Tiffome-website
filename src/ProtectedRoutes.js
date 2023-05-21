import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
export default function ProtectedRouted() {
    const auth = localStorage.getItem("loggedIn")
  return (
    auth ? <Outlet/> : <Navigate to={'/login'}/>
  )
}
