import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";
import UserProvider from "./Context/InstitutesContext.jsx";
import TeacherProvider from "./Context/TeacherContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <TeacherProvider>
        <App />
      </TeacherProvider>
    </UserProvider>
  </StrictMode>,
);
