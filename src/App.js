import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./styles/responsive/loginTablet.css";
import "./styles/responsive/loginTransition.css";
import "./styles/responsive/loginMobile.css";
import "./styles/responsive/homeTablet.css";
import "./styles/app/app.css";
import NotFound from "./components/NotFound";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div
      className={isDarkMode ? "theme--dark" : "theme"}
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <Login setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          }
        />
        <Route
          path="/home"
          element={
            <Home setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
