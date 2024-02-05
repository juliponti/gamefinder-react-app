import SocialMedia from "./SocialMedia";
import LoginAuth from "./LoginAuth";
import "../../styles/login/loginCard.css";

const CardContainer = ({ isDarkMode }) => {
  return (
    <div className="login-card__container">
      <div className="card__container">
        <LoginAuth />
        <SocialMedia isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default CardContainer;
