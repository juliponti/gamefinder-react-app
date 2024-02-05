import { createPortal } from "react-dom";
import ClosingCross from "../../assets/svg/home/closing-cross.svg"
import avatarLogo from "../../assets/svg/home/avatar-logo.svg"
import "../../styles/home/hamburgerMenu.css"
import LogoutDialog from "./LogoutDialog";

const HamburgerMenu = ({setOpenHamburgerMenu, setOpenDialog, openDialog}) => {

  const handleLogoutFromMenu = (e) =>{
    e.preventDefault();
    setOpenDialog(true);
  }
  return createPortal(
    <>
    <div className="hambuerger-menu-display">
      <div className="menu-header">
        <div className="user">
            <div className="profile-picture">
              <img src={localStorage.getItem("profile pic") ? localStorage.getItem("profile pic") : avatarLogo} alt="user"  />
            </div>
            <div>
                <h4>User Name{/* localStorage.getItem("name") */}</h4>
                <p>@user</p>  
            </div>
        </div>
        <button className="close-menu" onClick={()=>setOpenHamburgerMenu(false)}> 
            <img src={ClosingCross} alt="Closing cross" /> 
        </button>
      </div>
      <hr></hr>
      <div className="menu-list">
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Reviews</button>
          </li>
          <li>
            <button>New Releases</button>
          </li>
          <li>
            <button>Popular</button>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="menu-logout">
        <button  onClick={handleLogoutFromMenu}>Log out</button>
      </div>
    </div>
    {openDialog && <LogoutDialog closeDialog={setOpenDialog} />};
    </>,
    document.getElementById("hamburger-menu")
  );
};

export default HamburgerMenu;
