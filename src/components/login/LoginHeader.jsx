import Darkmode from "../Darkmode";
import logoLightMode from "../../assets/svg/login/logo-light.svg";
import "../../styles/login/loginHeader.css";

const LoginHeader = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <header className="header">
      <div className="header-div">
        <img
          src={logoLightMode}
          alt="Gamefinder logo"
          className={isDarkMode ? "dark-logo" : "logo"}
        />
        <div className="darkmode-container">
          <Darkmode setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default LoginHeader;
