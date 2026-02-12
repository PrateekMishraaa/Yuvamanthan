import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Components/ProtectedRoutes";

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

// Engage
const YouthCommunity = lazy(() => import("./Pages/Engage/YouthCommunity"));
const YuvamanthanMedia = lazy(() => import("./Pages/Engage/YuvamanthanMedia"));
const YuvamanthanBlog = lazy(() => import("./Pages/Engage/YuvamanthanBlog"));
const YuvamanthanNews = lazy(() => import("./Pages/Engage/YuvamanthanNews"));
const YuvamanthanContact = lazy(() => import("./Pages/Engage/YuvamanthanContact"));

// Dashboards
const Institution = lazy(() => import("./Dashboard/Institution"));
const Teacher = lazy(() => import("./Dashboard/Teacher"));
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

          {/* Institution */}
          <Route
            path="/institution/dashboard"
            element={<ProtectedRoutes><Institution /></ProtectedRoutes>}
          />
          <Route
            path="/institution/overview"
            element={<ProtectedRoutes><OverView /></ProtectedRoutes>}
          />
          <Route
            path="/institution/registered-address"
            element={<ProtectedRoutes><RegisteredAddress /></ProtectedRoutes>}
          />
          <Route
            path="/institution/appearance"
            element={<ProtectedRoutes><Appreance /></ProtectedRoutes>}
          />
          <Route
            path="/institution/social-presence"
            element={<ProtectedRoutes><SocialPresence /></ProtectedRoutes>}
          />
        <Route path="/institution/about-you" element={<ProtectedRoutes><AboutInstitution/></ProtectedRoutes>}/>
        <Route path="/institution/documents" element={<ProtectedRoutes><InstitutionDocuments/></ProtectedRoutes>}/>
        <Route path="/contact-details/mailing-address" element={<ProtectedRoutes><InstitutionMail/></ProtectedRoutes>}/>
          {/* Teacher */}
          <Route
            path="/teacher/dashboard"
            element={<ProtectedRoutes><Teacher /></ProtectedRoutes>}
          />

          {/* Student */}
          <Route
            path="/student/dashboard"
            element={<ProtectedRoutes><Student /></ProtectedRoutes>}
          />

          {/* Admin */}
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoutes><Admin /></ProtectedRoutes>}
          />

        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
