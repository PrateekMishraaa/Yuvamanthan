import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Programs from './Pages/Programs'
import About from './Pages/About'
const App = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App
