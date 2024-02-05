import logo from "../../assets/svg/home/header-logo.svg";
import avatarLogo from "../../assets/svg/home/avatar-logo.svg";
import Search from "./Search.jsx";
import hambMenu from "../../assets/svg/home/hamburger-menu.svg"
import { useState } from "react";
import "../../styles/home/homeHeader.css";
import "../../styles/home/hamburgerMenu.css"
import LogoutDialog from "./LogoutDialog";
import HamburgerMenu from "./HamburgerMenu";

const HomeHeader = ({
  setSearchValue,
  setSearchResult,
  setSearchIsOnfocus,
  searchIsOnfocus,
  setMadeSearch,
  games,
  setPageNumber,
  isLoading,
  searchValue,
  madeSearch,
  setGameSearched,
  setShowLastSearches,
  gameSearched,
  isCurrentPage,
  valueTarget,
  setValueTarget,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
   const handleLogout = (e) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  return (
    <>
      <header className="home-header">
        <div className="header-container">
          <button className="hamburger-menu" onClick={()=> setOpenHamburgerMenu(true)}>
            <img src={hambMenu} alt="Option menu" />
          </button>
          <div className="logo-container">
            <img src={logo} alt="Gamefinder logo" className="logo" />
          </div>
          <Search
            setSearchValue={setSearchValue}
            setSearchResult={setSearchResult}
            searchIsOnfocus={searchIsOnfocus}
            setSearchIsOnfocus={setSearchIsOnfocus}
            games={games}
            setPageNumber={setPageNumber}
            isLoading={isLoading}
            searchValue={searchValue}
            setMadeSearch={setMadeSearch}
            setGameSearched={setGameSearched}
            gameSearched={gameSearched}
            madeSearch={madeSearch}
            setShowLastSearches={setShowLastSearches}
            isCurrentPage={isCurrentPage}
            valueTarget={valueTarget}
            setValueTarget={setValueTarget}
          />
          <div className="profile-container">
            <div className="log-out">
              <button onClick={handleLogout}>Log out</button>
            </div>
            <div className="profile-picture">
              <img src={avatarLogo} alt="user" />
            </div>
          </div>
        </div>
      </header>
      {openDialog && <LogoutDialog closeDialog={setOpenDialog} />}
      {openHamburgerMenu &&(
        <HamburgerMenu
          setOpenHamburgerMenu={setOpenHamburgerMenu}
          setOpenDialog={setOpenDialog}
          openDialog={openDialog}
        />
      )}
    </>
  );
};

export default HomeHeader;
