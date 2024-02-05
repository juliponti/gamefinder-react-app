import fbLogoLight from "../../assets/svg/login/ssmm-fb-light.svg";
import fbLogoDark from "../../assets/svg/login/ssmm-fb-dark.svg";
import gmailLogoLight from "../../assets/svg/login/ssmm-gmail-light.svg";
import gmailLogoDark from "../../assets/svg/login/ssmm-gmail-dark.svg";
import twLogoLight from "../../assets/svg/login/ssmm-twitter-light.svg";
import twLogoDark from "../../assets/svg/login/ssmm-tw-dark.svg";
import "../../styles/login/loginCard.css";

const SocialMedia = ({ isDarkMode }) => {
  return (
    <div className="ssmm__container">
      <button className="ssmm-btn" onClick={(e) => e.preventDefault()}>
        <div>
          <img
            src={isDarkMode ? fbLogoDark : fbLogoLight}
            alt="Facebook logo"
            className="ssmm-logo"
          />
          <p>Login with Facebook</p>
        </div>
      </button>
      <div className="tooltip tooltip_ssmm--fb">coming soon...</div>
      <button className="ssmm-btn" onClick={(e) => e.preventDefault()}>
        <div>
          <img
            src={isDarkMode ? gmailLogoDark : gmailLogoLight}
            alt="Twitter logo"
            className="ssmm-logo"
          />
          <p>Login with Twitter</p>
        </div>
      </button>
      <div className="tooltip tooltip_ssmm--tw">coming soon...</div>
      <button className="ssmm-btn" onClick={(e) => e.preventDefault()}>
        <div>
          <img
            src={isDarkMode ? twLogoDark : twLogoLight}
            alt="Gmail logo"
            className="ssmm-logo"
          />
          <p>Login with Google</p>
        </div>
      </button>
      <div className="tooltip tooltip_ssmm--go">coming soon...</div>
    </div>
  );
};

export default SocialMedia;
