import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Protectedroute = () => {
  const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet/> : <Navigate to = {"/"} />
}

export default Protectedroute