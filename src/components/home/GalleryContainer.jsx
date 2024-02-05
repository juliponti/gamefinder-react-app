import Card from "./Card.jsx";
import Loader from "../Loader";
import "../../styles/home/galleryContainer.css";
import { useState, useEffect } from "react";

const GalleryContainer = ({
  isSingleColumn,
  games,
  pageNumber,
  setPageNumber,
  searchResult,
  showLastSearches,
  isLoading,
  isDarkMode,
  gameSearched,
}) => {
  const [isLastFetch, setIsLastFetch] = useState(false);

  useEffect(() => {
    games.length < 20 ? setIsLastFetch(true) : setIsLastFetch(false);
  }, [games]);

  return (
    <div className={"gallery-container"}>
      {searchResult && !showLastSearches ? (
        <div className="games-not-found-message">
          <p>No games were found</p>
        </div>
      ) : null}
      {gameSearched.length === 0 && showLastSearches ? (
        <div className="games-not-found-message">
          <p>No games were found</p>
        </div>
      ) : null}
      <div
        className={
          isSingleColumn ? "single-card__container" : "three-card__container"
        }>
        <>
          {showLastSearches
            ? gameSearched
                .slice(0, 2)
                .map((game, i) => (
                  <Card
                    game={game}
                    isSingleColumn={isSingleColumn}
                    key={game.id}
                    index={i}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    arrayLength={games.length}
                    isLoading={isLoading}
                    isLastFetch={isLastFetch}
                    isDarkMode={isDarkMode}
                  />
                ))
            : null}
          {!isLoading && !showLastSearches ? (
            games.map((game, i) => (
              <Card
                game={game}
                isSingleColumn={isSingleColumn}
                key={game.id}
                index={i}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                arrayLength={games.length}
                isLoading={isLoading}
                isLastFetch={isLastFetch}
                isDarkMode={isDarkMode}
              />
            ))
          ) : !showLastSearches ? (
            <Loader />
          ) : null}
        </>
      </div>
    </div>
  );
};

export default GalleryContainer;
