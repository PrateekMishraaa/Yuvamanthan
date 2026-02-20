import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google"; // ✅ FIXED
import App from "./App.jsx";
import UserProvider from "./Context/InstitutesContext.jsx";
import TeacherProvider from "./Context/TeacherContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <TeacherProvider>
        <GoogleOAuthProvider clientId="35663760498-9oph3eraul9j2812vartq6u33tsh7bot.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </TeacherProvider>
    </UserProvider>
  </StrictMode>
);