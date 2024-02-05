import { useNavigate } from "react-router-dom";
import "../../styles/home/logout.css";

const LogoutDialog = ({ closeDialog }) => {
  const navigate = useNavigate();
  const handleConfirmation = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("profile pic");
    navigate("/login");
  };

  return (
    <>
      <div className="overlay">
        <div className="dialog-container">
          <span className="dialog-title">
            Are you sure you want to log out?
          </span>
          <div className="dialog-btns-container">
            <button className="confirm-btn" onClick={handleConfirmation}>
              Ok
            </button>
            <button className="cancel-btn" onClick={() => closeDialog(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutDialog;
