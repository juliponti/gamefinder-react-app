import { useState, useEffect } from "react";
import { getData, getAllGameData } from "../../services/home.service";
import searchIcon from "../../assets/svg/home/search-icon.svg";

import "../../styles/home/home.css";

const Search = ({
  setSearchValue,
  searchIsOnfocus,
  setSearchIsOnfocus,
  games,
  setPageNumber,
  isLoading,
  setMadeSearch,
  setGameSearched,
  gameSearched,
  madeSearch,
  setShowLastSearches,
  isCurrentPage,
  valueTarget,
  setValueTarget,
}) => {
  const [dropdownMenuDisplay, setDropdownMenuDisplay] = useState(false);

  const [dropdownValues, setDropdownValue] = useState([]);
  const [allowFetch, setAllowFetch] = useState(false);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  let newGame

  useEffect(() => {
    if (!allowFetch) {
      setIsSearchLoading(false);
      return;
    } else if (valueTarget === "") {
      setDropdownMenuDisplay(false);
      setIsSearchLoading(false);
    } else {
      setDropdownMenuDisplay(false);
      getData(1, valueTarget).then((result) =>
        getAllGameData(result).then((data) => {
          setAllowFetch(false);
          setIsSearchLoading(false);
          setDropdownValue(data);
          setDropdownMenuDisplay(true);
        })
      );
    }
  }, [allowFetch]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (valueTarget.length === 0) {
        setDropdownMenuDisplay(false);
      } else if (valueTarget.length > 2) {
        fetchSearchGames(valueTarget);
        setSearchIsOnfocus(false);
        setDropdownMenuDisplay(false);
        setIsSearchLoading(false);
      }
    }
  };

  function fetchSearchGames(valueTarget) {
    setSearchValue(valueTarget);
    setPageNumber(1);
    setValueTarget(valueTarget);
    setDropdownMenuDisplay(false);
    setMadeSearch(true)
    setShowLastSearches(false);    
  }
  
  useEffect(() => {
    if (madeSearch){
      newGame = games[0];
      if (newGame){
        setGameSearched([newGame, ...gameSearched]) 
      } 
    }
  },[games]) 

  return (
    <>
      <div className="search__container">
        <div
          id="dot-pulse"
          className={isSearchLoading ? "dot-pulse-on" : "dot-pulse-off"}
        />
        <div className="search__container-input">
          <input
            type="text"
            placeholder="Search games..."
            onChange={(e) => {
              setValueTarget(e.target.value);
              setIsSearchLoading(true);
              setTimeout(() => setAllowFetch(true), 2500);
            }}
            onKeyUp={handleSearch}
            autoComplete="off"
            onFocus={() => {
              setSearchIsOnfocus(true);
              setDropdownMenuDisplay(false);
            }}
            onBlur={() => {
              setSearchIsOnfocus(false);
            }}
            value={valueTarget}
          />
          <svg
            onClick={() => {
              setSearchIsOnfocus(false);
              setValueTarget("");
            }}
            id="cross"
            className={valueTarget === "" ? "cross-off" : "cross-on"}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 11.9995C3 10.8176 3.23279 9.64736 3.68508 8.55548C4.13738 7.46361 4.80031 6.4715 5.63604 5.63581C6.47177 4.80013 7.46392 4.13722 8.55585 3.68495C9.64778 3.23268 10.8181 2.9999 12 2.9999C13.1819 2.9999 14.3522 3.23268 15.4442 3.68495C16.5361 4.13722 17.5282 4.80013 18.364 5.63581C19.1997 6.4715 19.8626 7.46361 20.3149 8.55548C20.7672 9.64736 21 10.8176 21 11.9995C21 14.3863 20.0518 16.6754 18.364 18.3631C16.6761 20.0509 14.3869 20.999 12 20.999C9.61305 20.999 7.32387 20.0509 5.63604 18.3631C3.94821 16.6754 3 14.3863 3 11.9995ZM12 1C5.925 1 1 5.92476 1 11.9995C1 18.0742 5.925 22.9989 12 22.9989C18.075 22.9989 23 18.0742 23 11.9995C23 5.92476 18.075 1 12 1ZM9.172 7.75667C8.98436 7.56904 8.72986 7.46363 8.4645 7.46363C8.19914 7.46363 7.94464 7.56904 7.757 7.75667C7.56936 7.9443 7.46394 8.19879 7.46394 8.46414C7.46394 8.59553 7.48982 8.72563 7.54011 8.84702C7.59039 8.9684 7.66409 9.0787 7.757 9.1716L10.586 11.9995L7.757 14.8273C7.56936 15.015 7.46394 15.2694 7.46394 15.5348C7.46394 15.8001 7.56936 16.0546 7.757 16.2423C7.94464 16.4299 8.19914 16.5353 8.4645 16.5353C8.72986 16.5353 8.98436 16.4299 9.172 16.2423L12 13.4134L14.829 16.2423C14.9219 16.3351 15.0322 16.4087 15.1536 16.459C15.2749 16.5092 15.405 16.535 15.5364 16.535C15.6677 16.5349 15.7978 16.509 15.9191 16.4587C16.0404 16.4084 16.1507 16.3347 16.2435 16.2418C16.3363 16.1489 16.41 16.0386 16.4602 15.9172C16.5104 15.7959 16.5363 15.6658 16.5362 15.5344C16.5362 15.4031 16.5102 15.2731 16.4599 15.1517C16.4096 15.0304 16.3359 14.9202 16.243 14.8273L13.414 11.9995L16.243 9.1716C16.4306 8.98411 16.5361 8.72975 16.5362 8.46449C16.5363 8.19923 16.431 7.9448 16.2435 7.75717C16.056 7.56954 15.8016 7.46408 15.5364 7.46398C15.2711 7.46389 15.0166 7.56917 14.829 7.75667L12 10.5855L9.172 7.75667Z"
              fill="#515151"
            />
          </svg>
        </div>
        <div
          className={
            dropdownMenuDisplay ? "search-dropdown-on" : "search-dropdown-off"
          }
        >
          {dropdownMenuDisplay
            ? dropdownValues.slice(0, 4).map((game) => {
                return (
                  <button
                    key={game.id}
                    className="search-suggestion-dropdown"
                    onClick={(e) => {
                      fetchSearchGames(e.target.innerHTML);
                    }}
                  >
                    {game.name}
                  </button>
                );
              })
            : ""}
        </div>

        <img src={searchIcon} alt="search-icon" className="search-icon" />
      </div>
    </>
  );
};
export default Search;
