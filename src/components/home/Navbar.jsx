import starIcon from "../../assets/svg/home/nav-star-icon.svg";
import calendarIcon from "../../assets/svg/home/nav-calendar-icon.svg";
import clockIcon from "../../assets/svg/home/nav-clock-icon.svg";
import navSearchIcon from "../../assets/svg/home/nav-search-icon.svg";
import thumbsUpIcon from "../../assets/svg/home/nav-thumbs-up-icon.svg";
import HomeBtn from "./HomeBtn";

import "../../styles/home/navbar.css";

const Navbar = ({
  setShowLastSearches,
  setGames,
  setPageNumber,
  setSearchValue,
  setIsCurrentPage,
  isCurrentPage,
  setValueTarget,
}) => {
  
  const handleClick = () => {
    setShowLastSearches(true);
    setGames([]);
  }
  
  return (
    <aside>
      <nav className="navbar__container">
        <ul>
          <li>
            <HomeBtn
              setSearchValue={setSearchValue}
              setPageNumber={setPageNumber}
              isCurrentPage={isCurrentPage}
              setIsCurrentPage={setIsCurrentPage}
              setValueTarget={setValueTarget}
            />
          </li>
          <li>
            <button>Reviews</button>
            <div className="tooltip-home">coming soon...</div>
          </li>

          <li>
            <button>New Releases</button>
            <div className="tooltip-home">coming soon...</div>
          </li>
        </ul>
        <ul className="second-section">
          <li>
            <button>
              <img src={starIcon} alt="Star icon" />
              This week
            </button>
            <div className="tooltip-home">coming soon...</div>
          </li>
          <li>
            <button>
              <img src={calendarIcon} alt="Calendar icon" />
              This month
            </button>
            <div className="tooltip-home">coming soon...</div>
          </li>
          <li>
            <button>
              <img src={clockIcon} alt="Clock icon" />
              Coming soon
            </button>
            <div className="tooltip-home">coming soon...</div>
          </li>
        </ul>

        <div className="last-section">
          <p className="navbar__secondary-title">Popular</p>
          <ul>
            <li id="last-searches">
              <button onClick={handleClick}>
                <img src={navSearchIcon} alt="Search icon" />
                Last searches 
              </button>
            </li>
            <li>
              <button>
                <img src={thumbsUpIcon} alt="" />
                Best of the year
              </button>
              <div className="tooltip-home last-tooltip">coming soon...</div>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Navbar;
