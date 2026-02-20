import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Logo from "../src/assets/logo.png"
/* =======================
   LAZY LOADED PAGES
======================= */

// Auth & Common
const HomePage = lazy(() => import("./Pages/HomePage"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const About = lazy(() => import("./Pages/About"));
const Programs = lazy(() => import("./Pages/Programs"));

// Programs
const Nipam = lazy(() => import("./Pages/Programs/Nipam"));
const AirQualityAwareness = lazy(() => import("./Pages/Programs/AirQualityAwareness"));
const ModelG20 = lazy(() => import("./Pages/Programs/ModelG20"));
const YuvamanthanUnitedNations = lazy(() =>
  import("./Pages/Programs/YuvamanthanUnitedNations")
);
import { useNavigate } from "react-router-dom";


// Engage
const YouthCommunity = lazy(() => import("./Pages/Engage/YouthCommunity"));
const YuvamanthanMedia = lazy(() => import("./Pages/Engage/YuvamanthanMedia"));
const YuvamanthanBlog = lazy(() => import("./Pages/Engage/YuvamanthanBlog"));
const YuvamanthanNews = lazy(() => import("./Pages/Engage/YuvamanthanNews"));
const YuvamanthanContact = lazy(() => import("./Pages/Engage/YuvamanthanContact"));

const Life = lazy(()=>import('../src/Pages/Themes/MissionLife.jsx'))
const ParthnerShips = lazy(()=>import("../src/Pages/AboutPages/ParthnerShips.jsx"))
const FutureWork  = lazy(()=>import('../src/Pages/Themes/FutureWork.jsx'))
const PeaceBuilding = lazy(()=>import('../src/Pages/Themes/PeaceBuilding.jsx'))
const Climate = lazy(()=>import('../src/Pages/Themes/ClimateChange.jsx'))
const Health = lazy(()=>import('../src/Pages/Themes/HealthWell.jsx'))
const Future = lazy(()=>import("../src/Pages/Themes/SharedFuture.jsx"))
// Dashboards
const Institution = lazy(() => import("./Dashboard/Institution"));
const Teacher = lazy(() => import("./Dashboard/Teacher"));
const TeacherAppreance = lazy(()=>import("./Pages/TeacherParts/TeacherAppreance.jsx"))
const TeacherSocial = lazy(()=>import("./Pages/TeacherParts/TeacherSocial.jsx"))
const Student = lazy(() => import("./Dashboard/Student"));
const Admin = lazy(() => import("./Pages/Admin"));

// Institution Parts
const OverView = lazy(() => import("./Pages/InstitutionParts/OverView.jsx"));
const AboutInstitution = lazy(()=>import("./Pages/InstitutionParts/AboutInstitution.jsx"))
const InstitutionDocuments = lazy(()=>import("./Pages/InstitutionParts/InstitutionDocuments.jsx"))
const InstitutionMail = lazy(()=>import("./Pages/InstitutionParts/InstitutionMailing.jsx"))
const RegisteredAddress = lazy(() =>
  import("./Pages/InstitutionParts/RegisteredAddress.jsx")
);
const Appreance = lazy(() => import("./Pages/InstitutionParts/Appreance.jsx"));
const SocialPresence = lazy(() =>
  import("./Pages/InstitutionParts/SocialPresence.jsx")
);

/* =======================
   APP COMPONENT
======================= */

const App = () => {
  // const navigate = useNavigate()
  return (
    <Router>
      <Suspense fallback={<div className="page-loader">Loading page...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about/parthnership" element={<ParthnerShips/>}/>

          {/* Programs */}
          <Route path="/programs/nipam" element={<Nipam />} />
          <Route path="/program/cleanAir" element={<AirQualityAwareness />} />
          <Route path="/program/modelg20" element={<ModelG20 />} />
          <Route path="/program/ymun" element={<YuvamanthanUnitedNations />} />

          {/* Engage */}
          <Route path="/engage/youth-community" element={<YouthCommunity />} />
          <Route path="/engage/yuvamanthanG20-media" element={<YuvamanthanMedia />} />
          <Route path="/engage/blog" element={<YuvamanthanBlog />} />
          <Route path="/engage/news" element={<YuvamanthanNews />} />
          <Route path="/engage/contact-us" element={<YuvamanthanContact />} />
          <Route path="/theme/life" element={<Life/>}/>
          <Route path="/theme/future-of-work" element={<FutureWork/>}/>
          <Route path="/theme/peacebuilding-and-reconciliation" element={<PeaceBuilding/>}/>
          <Route path="/theme/climate-change-and-risk-disaster" element={<Climate/>}/>
          <Route path="/theme/health-well-being-and-sports" element={<Health/>}/>
          <Route path="/theme/shared-future" element={<Future/>}/>

          {/* ========== INSTITUTION ROUTES ========== */}
          {/* Main Institution Routes with ID */}
          <Route
            path="/institution/:id"
            element={
              <ProtectedRoutes>
                <Institution />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/institution/:id/:section"
            element={
              <ProtectedRoutes>
                <Institution />
              </ProtectedRoutes>
            }
          />

          {/* Institution Part Routes with ID */}
          <Route
            path="/institution/:id/overview"
            element={
              <ProtectedRoutes>
                <OverView />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/institution/:id/registered-address"
            element={
              <ProtectedRoutes>
                <RegisteredAddress />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/institution/:id/appearance"
            element={
              <ProtectedRoutes>
                <Appreance />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/institution/:id/social-presence"
            element={
              <ProtectedRoutes>
                <SocialPresence />
              </ProtectedRoutes>
            }
          />
          <Route 
            path="/institution/:id/about-you" 
            element={
              <ProtectedRoutes>
                <AboutInstitution />
              </ProtectedRoutes>
            }
          />
          <Route 
            path="/institution/:id/documents" 
            element={
              <ProtectedRoutes>
                <InstitutionDocuments />
              </ProtectedRoutes>
            }
          />
          
          {/* Contact Details Route with ID */}
          <Route 
            path="/contact-details/:id/mailing-address" 
            element={
              <ProtectedRoutes>
                <InstitutionMail />
              </ProtectedRoutes>
            }
          />

          {/* ========== TEACHER ROUTES ========== */}
          {/* Main Teacher Routes with ID */}
          <Route
            path="/teacher/:id/personal-details/about-you"
            element={
              <ProtectedRoutes>
                <Teacher />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/teacher/:id/personal-details/appearance"
            element={
              <ProtectedRoutes>
                <TeacherAppreance />
              </ProtectedRoutes>
            }
          />
          <Route 
            path="/teacher/:id/social-media" 
            element={
              <ProtectedRoutes>
                <TeacherSocial />
              </ProtectedRoutes>
            }
          />
          
          {/* Additional Teacher Routes if needed */}
          <Route
            path="/teacher/:id/personal-details*"
            element={
              <ProtectedRoutes>
                <Teacher />
              </ProtectedRoutes>
            }
          />

          {/* ========== STUDENT ROUTES ========== */}
          <Route
            path="/student/:id/dashboard"
            element={
              <ProtectedRoutes>
                <Student />
              </ProtectedRoutes>
            }
          />
          
          {/* Student Dashboard with optional sections */}
          <Route
            path="/student/:id/:section"
            element={
              <ProtectedRoutes>
                <Student />
              </ProtectedRoutes>
            }
          />

          {/* ========== ADMIN ROUTES ========== */}
          <Route
            path="/admin/:id/dashboard"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          />
          
          {/* Admin Routes with sections */}
          <Route
            path="/admin/:id/:section"
            element={
              <ProtectedRoutes>
                <Admin />
              </ProtectedRoutes>
            }
          />

          {/* ========== REDIRECT ROUTES (for backward compatibility) ========== */}
          {/* These will redirect to the new routes with ID from localStorage */}
          <Route
            path="/institution"
            element={
              <ProtectedRoutes>
                <RedirectToId basePath="/institution" />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/teacher/personal-details/about-you"
            element={
              <ProtectedRoutes>
                <RedirectToId basePath="/teacher/personal-details/about-you" />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoutes>
                <RedirectToId basePath="/student/dashboard" />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoutes>
                <RedirectToId basePath="/admin/dashboard" />
              </ProtectedRoutes>
            }
          />

          {/* Catch-all redirect for any unmatched routes */}
          <Route path="*" element={<NavigateToLogin />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

// Helper component to redirect to ID-based routes
const RedirectToId = ({ basePath }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  
  React.useEffect(() => {
    if (userId) {
      navigate(`${basePath}/${userId}`, { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [userId, basePath, navigate]);
  
  return <div>Redirecting...</div>;
};

// Helper component to navigate to login
const NavigateToLogin = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    navigate('/login', { replace: true });
  }, [navigate]);
  
  return <div>Redirecting to login...</div>;
};

export default App;



// 35663760498-9oph3eraul9j2812vartq6u33tsh7bot.apps.googleusercontent.com