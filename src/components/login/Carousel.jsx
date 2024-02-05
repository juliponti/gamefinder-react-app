import { useState } from "react";
import {
  SLIDES,
  DARKMODE_SLIDES,
  BACKUP_SLIDES,
  generateKey,
} from "../utils/carouselData";
import LoginHeader from "./LoginHeader";
import CardContainer from "./CardContainer";
import leftArrowLight from "../../assets/svg/login/arrow-left-light-mode.svg";
import leftArrowDark from "../../assets/svg/login/arrow-left-dark.svg";
import rightArrowLight from "../../assets/svg/login/arrow-right-light-mode.svg";
import rightArrowDark from "../../assets/svg/login/arrow-right-dark.svg";
import "../../styles/login/login.css";

const Carousel = ({ setIsDarkMode, isDarkMode }) => {
  const [currImg, setCurrImg] = useState(0);
  const moveDot = (index) => {
    setCurrImg(index);
  };

  return (
    <div
      className="carousel-container"
      style={{
        backgroundImage: `url(${
          isDarkMode
            ? DARKMODE_SLIDES[currImg].img || BACKUP_SLIDES[currImg].img
            : SLIDES[currImg].img || BACKUP_SLIDES[currImg].img
        })  `,
      }}>
      <LoginHeader setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <main className="main">
        {/* Left arrow */}

        <div className="arrow__container">
          <button
            className="arrow--left"
            onClick={() => {
              if (currImg === 0) {
                setCurrImg(5);
              } else {
                setCurrImg(currImg - 1);
              }
            }}
            style={{
              filter: `${
                isDarkMode
                  ? "drop-shadow(0 0 5px var(--gray-600))"
                  : "drop-shadow(0 0 5px var(--gray-400))"
              }`,
            }}>
            <img
              src={isDarkMode ? leftArrowDark : leftArrowLight}
              alt="left arrow carousel"
            />
          </button>
        </div>

        {/* Login card container */}

        <CardContainer isDarkMode={isDarkMode} />

        {/* Right arrow */}
        <div className="arrow__container">
          <button
            href=""
            className="arrow--right"
            onClick={() => {
              if (currImg === 5) {
                setCurrImg(0);
              } else {
                setCurrImg(currImg + 1);
              }
            }}
            style={{
              filter: `${
                isDarkMode
                  ? "drop-shadow(0 0 5px var(--gray-600))"
                  : "drop-shadow(0 0 5px var(--gray-400))"
              }`,
            }}>
            <img
              src={isDarkMode ? rightArrowDark : rightArrowLight}
              alt="right arrow carousel"
            />
          </button>
        </div>
      </main>

      <div className="carousel-controller">
        <div
          className="bullet-container"
          style={{
            filter: `${
              isDarkMode
                ? "drop-shadow(0 0 5px var(--gray-600))"
                : "drop-shadow(0 0 5px var(--gray-400))"
            }`,
          }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={generateKey("dot")}
              onClick={() => moveDot(index)}
              className={
                currImg === index && !isDarkMode
                  ? "dot-active"
                  : currImg !== index && !isDarkMode
                  ? "dot-inactive"
                  : currImg === index && isDarkMode
                  ? "dot-active-dark"
                  : "dot-inactive-dark"
              }></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
