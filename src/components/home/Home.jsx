import HomeHeader from "./HomeHeader";
import Banner from "./Banner";
import Navbar from "./Navbar";
import GalleryContainer from "./GalleryContainer";
import Snackbar from "../Snackbar";
import { useEffect, useState, useRef } from "react";
import { getData, getAllGameData } from "../../services/home.service.js";
import { useNavigate } from "react-router-dom";
import "../../styles/home/home.css";

const Home = ({ isDarkMode, setIsDarkMode }) => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);
  const [games, setGames] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchIsOnfocus, setSearchIsOnfocus] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [showLastSearches, setShowLastSearches] = useState(false);
  const [firstLoad, setfirstLoad] = useState(false);
  const [valueTarget, setValueTarget] = useState("");
  const [isCurrentPage, setIsCurrentPage] = useState(true);
  const [gameSearched, setGameSearched] = useState([]);
  const [madeSearch, setMadeSearch] = useState(false);

  const snackbarRef = useRef();
  const navigate = useNavigate();
  const errorMessage = "An error has occured";

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  useEffect(() => {
    if (pageNumber !== 1) {
      getData(pageNumber, searchValue)
        .then((results) =>
          getAllGameData(results).then((data) => {
            setGames((prev) => [...prev, ...data]);
            setfirstLoad(true);
          })
        )
        .catch(() => {
          snackbarRef.current.show(errorMessage);
        });
    } else {
      setIsLoading(true);
      setSearchResult(false);
      getData(1, searchValue)
        .then((results) =>
          getAllGameData(results).then((data) => {
            setGames([...data]);
            setIsLoading(false);
            setfirstLoad(true);
          })
        )
        .catch(() => {
          snackbarRef.current.show(errorMessage);
        });
    }
  }, [pageNumber, searchValue]);

  useEffect(() => {
    if (firstLoad) {
      if (games.length === 0) {
        setSearchResult(true);
      } else {
        setSearchResult(false);
      }
    }
  }, [games, firstLoad]);

  return (
    <>
      <div
        id="search-overlay"
        className={searchIsOnfocus ? "search-overlay-on" : "search-overlay-off"}
      />
      <div>
        <HomeHeader
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
        <main className="home__main">
          <Banner
            onChangeSingleColumn={setIsSingleColumn}
            isSingleColumn={isSingleColumn}
            setIsDarkMode={setIsDarkMode}
            isDarkMode={isDarkMode}
          />
          <section className="home__main__primary-section">
            <Navbar
              setShowLastSearches={setShowLastSearches}
              setGames={setGames}
              setSearchValue={setSearchValue}
              setPageNumber={setPageNumber}
              isCurrentPage={isCurrentPage}
              setIsCurrentPage={setIsCurrentPage}
              setValueTarget={setValueTarget}
            />
            <GalleryContainer
              isLoading={isLoading}
              games={games}
              isSingleColumn={isSingleColumn}
              setPageNumber={setPageNumber}
              pageNumber={pageNumber}
              searchResult={searchResult}
              searchValue={searchValue}
              showLastSearches={showLastSearches}
              gameSearched={gameSearched}
              isDarkMode={isDarkMode}
            />
          </section>
        </main>
        <footer className="home__footer" />
      </div>
      <Snackbar ref={snackbarRef} />
    </>
  );
};

export default Home;
