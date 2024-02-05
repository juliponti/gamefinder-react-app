import Carousel from "./Carousel";
import "../../styles/login/login.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = ({ setIsDarkMode, isDarkMode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  });

  return (
    <div className="login-container">
      <Carousel setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Login;
