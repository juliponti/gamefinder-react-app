import "../styles/app/notFound.css";
import arrow from "../assets/svg/login/arrow-left-dark.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found__container">
      <span>404</span>
      <h1 className="not-found__title">
        You've find a page that doesn't exist
      </h1>
      <Link to="/home" className="not-found__link-text">
        <img src={arrow} alt="" />
        Take me home
      </Link>
    </div>
  );
};

export default NotFound;
