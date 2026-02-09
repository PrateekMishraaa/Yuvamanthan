import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Programs from './Pages/Programs'
import ProtectedRoutes from './Components/ProtectedRoutes'
import About from './Pages/About'
import Admin from './Pages/Admin'
const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={
          // <ProtectedRoutes>
          <HomePage/>
        // </ProtectedRoutes>
        }
        />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/programs' element={
          // <ProtectedRoutes>
          <Programs/>
        // </ProtectedRoutes>
      }
        />
        <Route path='/about' element={
          // <ProtectedRoutes>
          <About/>
        // </ProtectedRoutes>
        }/>
         <Route path='/admin/dashboard' element={<ProtectedRoutes>
          <Admin/>
        </ProtectedRoutes>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
