import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Programs from './Pages/Programs'
import ProtectedRoutes from './Components/ProtectedRoutes'
import About from './Pages/About'
import Admin from './Pages/Admin'
import Nipam from './Pages/Programs/Nipam'
import AirQualityAwareness from './Pages/Programs/AirQualityAwareness'
import ModelG20 from './Pages/Programs/ModelG20'
import YuvamanthanUnitedNations from './Pages/Programs/YuvamanthanUnitedNations'
import YouthCommunity from './Pages/Engage/YouthCommunity'
import YuvamanthanMedia from './Pages/Engage/YuvamanthanMedia'
import YuvamanthanBlog from './Pages/Engage/YuvamanthanBlog'
import YuvamanthanNews from './Pages/Engage/YuvamanthanNews'
import YuvamanthanContact from './Pages/Engage/YuvamanthanContact'
import Institution from './Dashboard/Institution'
import Teacher from './Dashboard/Teacher'
import Student from './Dashboard/Student'
import ForgotPassword from './Pages/ForgotPassword'
import OverView from './Pages/InstitutionParts.jsx/OverView'
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
        <Route path='/programs/nipam' element={
          // <ProtectedRoutes>
          <Nipam/>
        // {/* </ProtectedRoutes> */}
      }/>
        <Route path='/program/cleanAir' element={
          // <ProtectedRoutes>
          <AirQualityAwareness/>
        // {/* </ProtectedRoutes> */}
        }
        />
        <Route path='/program/modelg20' element={
          // <ProtectedRoutes>
          <ModelG20/>
        // {/* </ProtectedRoutes> */}
      }/>
        <Route path='/program/ymun' element={<YuvamanthanUnitedNations/>}/>
        <Route path="/engage/youth-community" element={<YouthCommunity/>}/>
        <Route path='/engage/yuvamanthanG20-media'element={<YuvamanthanMedia/>}/>
        <Route path='/engage/blog' element={<YuvamanthanBlog/>}/>
        <Route path='/engage/news' element={<YuvamanthanNews/>}/>
        <Route path='/engage/contact-us' element={<YuvamanthanContact/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/institution/dashboard' element={<ProtectedRoutes>
          <Institution/>
        </ProtectedRoutes>}/>
        <Route path='/institution/overview' element={<ProtectedRoutes>
          <OverView/>
        </ProtectedRoutes>}/>
        <Route path='/teacher/dashboard' element={<ProtectedRoutes>
          <Teacher/>
        </ProtectedRoutes>}/>
        <Route path='/student/dashboard' element={<ProtectedRoutes>
          <Student/>
        </ProtectedRoutes>}/>
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
