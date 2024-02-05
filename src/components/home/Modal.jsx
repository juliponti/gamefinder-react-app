import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

import cross from "../../assets/svg/home/modal-cross.svg";
import like from "../../assets/svg/home/like-logo.svg";
import chatBubbles from "../../assets/svg/home/modal-chatbubles.svg";
import thumbUp from "../../assets/svg/home/nav-thumbs-up-icon.svg";
import action from "../../assets/svg/home/modal-action.svg";
import bgDefault from "../../assets/bg-default.jpg";
import { useRef, useState, useEffect } from "react";
import { formatDate } from "../utils/cardUtils";
import { getTrailer } from "../../services/home.service";
import Loader from "../Loader";
import "../../styles/home/modal.css";

const Modal = ({
  setOpen,
  gameInfo,
  platformsImg,
  filteredPlatforms,
  isDarkMode,
}) => {
  const modalRoot = useRef();
  const [trailer, setTrailer] = useState(null);
  function close(e) {
    e.target === modalRoot.current && setOpen(false);
  }

  const {
    background_image,
    name,
    released,
    rating_top,
    description_raw,
    platforms,
    publishers,
    developers,
    genres,
    website,
    id,
    short_screenshots,
  } = gameInfo;

  useEffect(() => {
    getTrailer(id).then((data) => {
      setTrailer(data.data.results[0]);
    });
  }, [id, trailer]);

  return createPortal(
    <div className="modal-root" ref={modalRoot} onClick={(e) => close(e)}>
      <div
        id="modal-container"
        className={isDarkMode ? "theme--dark" : "theme"}
        style={{
          backgroundImage: `url(${background_image || bgDefault})`,
        }}>
        <div className="modal-gradient" />
        <div>
          <button className="modal-cross-btn"  onClick={() => setOpen(false)}>
            <img src={cross} alt="Close cross" />
          </button>
          <div className="modal-first-module">
            <div className="modal-platforms__container">
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
            <h1 className="modal-title long-description-title">{name}</h1>
            <div className="modal-chips__container">
              <div>
                <p>{formatDate(released) || "No date avaiable"}</p>
              </div>
              <div>
                <span>#{rating_top}</span>
                <p>TOP 2021</p>
              </div>
              <div>
                <span>#9</span>
                <p>RPG</p>
              </div>
            </div>
            <div className="modal-description">{description_raw}</div>
            <div className="modal-btns__container">
              <button>
                Add to wishlist
                <img src={like} alt="" className="favorite" />
              </button>
              <div className="modal-tooltip">coming soon...</div>
              <button>Purchase</button>
              <div className="modal-tooltip modal-tooltip-2">
                coming soon...
              </div>
            </div>
          </div>
          <div className="modal-info__container">
            <div>
              <div>
                <p>Platforms</p>
                <p className="long-description">
                  {platforms.map((platform, index) => (
                    <span key={platform.platform.id}>
                      {platform.platform.name}
                      {index === platforms.length - 1 ? " " : ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p>Release date</p>
                <p>{formatDate(released) || "No date avaiable"}</p>
              </div>
              <div>
                <p>Publisher</p>
                <p className="long-description">
                  {publishers.map((publisher, i) => (
                    <span key={publisher.id}>
                      {publisher.name}
                      {i === publishers.length - 1 ? " " : ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p>Website</p>
                <Link to={website ? website : ""}>
                  {website || "No website avaiable"}
                </Link>
              </div>
            </div>
            <div>
              <div>
                <p>Genre</p>
                <p className="long-description">
                  {genres.map((genre, i) => (
                    <span key={genre.id}>
                      {genre.name}
                      {i === genres.length - 1 ? "" : ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p>Developed</p>
                <p className="long-description">
                  {developers.map((dev, i) => (
                    <span key={dev.id}>
                      {dev.name}
                      {i === developers.length - 1 ? "" : ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p>Age Rating</p>
                <p>Not Rated</p>
              </div>
              <div>
                <img src={chatBubbles} alt="" />
                <img src={thumbUp} alt="" />
                <img src={action} alt="" />
              </div>
            </div>
          </div>
        </div>
        {
          //Right Side
        }
        <div className="modal-captures__container">
          {trailer ? (
            trailer !== null ? (
              <video
                className="modal-trailer"
                poster={trailer.preview}
                width="392"
                height="217"
                controls>
                <source src={trailer.data.max} type="video/mp4" />
                Your browser does not support the video tag
              </video>
            ) : (
              <Loader />
            )
          ) : (
            <img
              src={short_screenshots[0]?.image || bgDefault}
              alt="Screenshot of game"
              className="modal-video"
            />
          )}
          <div>
            <img src={short_screenshots[0]?.image || bgDefault} alt="" />
            <img src={short_screenshots[1]?.image || bgDefault} alt="" />
            <img src={short_screenshots[2]?.image || bgDefault} alt="" />
            <img src={short_screenshots[3]?.image || bgDefault} alt="" />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
