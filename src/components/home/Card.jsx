import likeLogo from "../../assets/svg/home/like-logo.svg";
import bgDefault from "../../assets/bg-default.jpg";
import pc from "../../assets/svg/home/platform-windows.svg";
import ps from "../../assets/svg/home/platform-ps.svg";
import xbox from "../../assets/svg/home/platform-xbox.svg";
import nSwitch from "../../assets/svg/home/platform-switch.svg";
import { formatDate, getGenres } from "../utils/cardUtils";
import { useState, useRef, useCallback } from "react";
import Modal from "./Modal.jsx";
import "../../styles/home/card.css";

const Card = ({
  game,
  isSingleColumn,
  index,
  setPageNumber,
  arrayLength,
  isLastFetch,
  isDarkMode,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const { parent_platforms } = game;
  const observer = useRef(null);
  let isObserved;

  const platformsImg = {
    1: pc,
    2: ps,
    3: xbox,
    7: nSwitch,
  };

  const observedGame = useCallback(
    (card) => {
      if (isLastFetch) {
        return;
      }
      if (observer.current && !isLastFetch) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (card) observer.current.observe(card);
    },
    [setPageNumber, isLastFetch]
  );

  if (arrayLength / 2 === index) {
    isObserved = <div ref={observedGame}></div>;
  } else {
    isObserved = <div></div>;
  }

  const filteredPlatforms = parent_platforms.filter(
    (platform) =>
      platform.platform.id === 1 ||
      platform.platform.id === 2 ||
      platform.platform.id === 3 ||
      platform.platform.id === 7
  );

  return (
    <>
      <button
        className={isSingleColumn ? "single-card__card" : "three-cards__card"}
        aria-label="game card"
        onClick={() => setOpenModal(true)}
        key={game.id}>
        <div>
          {isObserved}
          <img
            className="game-image"
            src={game.background_image || bgDefault}
            alt="game poster"
          />
          <img
            className={isSingleColumn ? "single-card-like" : "three-cards-like"}
            src={likeLogo}
            alt="heart shape icon"
          />
        </div>
        <div>
          <div>
            <h2>{game.name}</h2>
            <span>#{index + 1}</span>
          </div>
          <div>
            <div>
              <div>
                <p>Release date:</p>
                <p>{formatDate(game.released)}</p>
              </div>
              <div>
                <p>Genres:</p>
                <p>{getGenres(game.genres)}</p>
              </div>
            </div>
            <div>
              {filteredPlatforms.map((platform) => {
                const id = platform.platform.id;
                return (
                  <img
                    className="platform-icon"
                    src={platformsImg[id]}
                    alt={platform.name}
                    key={id}
                    style={{
                      filter: `${
                        isDarkMode ? "brightness(5.5)" : "brightness(1)"
                      }`,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div
            className={isSingleColumn ? "description-on" : "description-off"}>
            <p className="text-description">{game.description_raw}</p>
          </div>
        </div>
      </button>

      {openModal && (
        <Modal
          isDarkMode={isDarkMode}
          setOpen={setOpenModal}
          gameInfo={game}
          platformsImg={platformsImg}
          filteredPlatforms={filteredPlatforms}
        />
      )}
    </>
  );
};

export default Card;
