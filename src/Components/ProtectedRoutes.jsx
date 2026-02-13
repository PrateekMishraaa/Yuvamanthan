import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const userToken = localStorage.getItem('token')
  // console.log('user token:', userToken)

  if (!userToken) {
    return <Navigate to="/register" replace />
  }

  return children
}

export default ProtectedRoutes
