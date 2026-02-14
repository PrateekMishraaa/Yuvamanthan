import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ProtectedRoutes = ({ children }) => {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId')
  const userData = localStorage.getItem('userData')
  
  console.log('ProtectedRoutes - Token exists:', !!token)
  console.log('ProtectedRoutes - UserId exists:', !!userId)
  console.log('ProtectedRoutes - Current path:', location.pathname)

  // Check if user is authenticated
  if (!token || !userId) {
    console.log('No token or userId found, redirecting to login')
    localStorage.clear() // Clear any partial data
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  try {
    // Verify token is valid and not expired
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000
    
    if (decoded.exp < currentTime) {
      // Token expired
      console.log('Token expired, clearing storage and redirecting to login')
      localStorage.clear()
      return <Navigate to="/login" replace state={{ from: location }} />
    }

    // Verify that the userId in URL matches the logged-in user (if present in URL)
    const pathSegments = location.pathname.split('/')
    const urlUserId = pathSegments.find(segment => 
      segment.match(/^[0-9a-fA-F]{24}$/) || // MongoDB ObjectId format
      segment.match(/^[0-9]+$/) // Numeric ID format
    )

    if (urlUserId && urlUserId !== userId) {
      console.log('URL userId does not match logged-in user, redirecting to unauthorized')
      return <Navigate to="/unauthorized" replace />
    }

    // Optional: Check if user role matches the route
    const userRole = decoded.role || (userData ? JSON.parse(userData).role : null)
    
    // Role-based route protection
    if (location.pathname.includes('/admin') && userRole !== 'admin') {
      return <Navigate to="/unauthorized" replace />
    }
    if (location.pathname.includes('/teacher') && userRole !== 'teacher') {
      return <Navigate to="/unauthorized" replace />
    }
    if (location.pathname.includes('/student') && userRole !== 'student') {
      return <Navigate to="/unauthorized" replace />
    }
    if (location.pathname.includes('/institution') && userRole !== 'institution') {
      return <Navigate to="/unauthorized" replace />
    }

    return children
  } catch (error) {
    // Invalid token
    console.error('Invalid token:', error)
    localStorage.clear()
    return <Navigate to="/login" replace state={{ from: location }} />
  }
}

export default ProtectedRoutes