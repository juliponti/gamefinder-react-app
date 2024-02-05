import "../../styles/home/banner.css";
import Darkmode from "../Darkmode";

function Banner({
  onChangeSingleColumn,
  isSingleColumn,
  isDarkMode,
  setIsDarkMode,
}) {
  return (
    <section className="home__main__banner-section">
      <div className="banner-text__container">
        <h1>New and trending</h1>
        <p>Based on player counts and release date</p>
      </div>
      <div className="banner-vw-darkmode-container">
        <Darkmode setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <div className="banner-view-btns__container">
          <button
            aria-label="change to three column view"
            onClick={() => onChangeSingleColumn(false)}>
            <svg
              className={isSingleColumn ? "inactive" : "active"}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="#939393" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.5432 8.79993H13.2575C11.6796 8.79993 10.4004 10.0791 10.4004 11.6571V15.9428C10.4004 17.5207 11.6796 18.7999 13.2575 18.7999H27.5432C29.1212 18.7999 30.4004 17.5207 30.4004 15.9428V11.6571C30.4004 10.0791 29.1212 8.79993 27.5432 8.79993ZM11.829 11.6571C11.829 10.8681 12.4686 10.2285 13.2576 10.2285H27.5433C28.3323 10.2285 28.9719 10.8681 28.9719 11.6571V15.9428C28.9719 16.7318 28.3323 17.3714 27.5433 17.3714H13.2576C12.4686 17.3714 11.829 16.7318 11.829 15.9428V11.6571ZM13.2575 21.6571H27.5432C29.1212 21.6571 30.4004 22.9362 30.4004 24.5142V28.7999C30.4004 30.3779 29.1212 31.6571 27.5432 31.6571H13.2575C11.6796 31.6571 10.4004 30.3779 10.4004 28.7999V24.5142C10.4004 22.9362 11.6796 21.6571 13.2575 21.6571ZM11.829 24.5141C11.829 23.7252 12.4686 23.0856 13.2576 23.0856H27.5433C28.3323 23.0856 28.9719 23.7252 28.9719 24.5141V28.7999C28.9719 29.5888 28.3323 30.2284 27.5433 30.2284H13.2576C12.4686 30.2284 11.829 29.5888 11.829 28.7999V24.5141Z"
                fill="#515151"
              />
            </svg>
          </button>

          <button
            aria-label="change to one column view"
            onClick={() => onChangeSingleColumn(true)}>
            <svg
              className={isSingleColumn ? "active" : "inactive"}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="#D8D8D8" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4004 11.8287C10.4004 11.4342 10.7202 11.1144 11.1147 11.1144H29.6861C30.0806 11.1144 30.4004 11.4342 30.4004 11.8287C30.4004 12.2232 30.0806 12.543 29.6861 12.543H11.1147C10.7202 12.543 10.4004 12.2232 10.4004 11.8287ZM27.5432 15.4001H13.2575C11.6796 15.4001 10.4004 16.6793 10.4004 18.2572V22.5429C10.4004 24.1209 11.6796 25.4001 13.2575 25.4001H27.5432C29.1212 25.4001 30.4004 24.1209 30.4004 22.5429V18.2572C30.4004 16.6793 29.1212 15.4001 27.5432 15.4001ZM11.8291 18.2573C11.8291 17.4684 12.4687 16.8288 13.2577 16.8288H27.5434C28.3324 16.8288 28.972 17.4684 28.972 18.2573V22.5431C28.972 23.332 28.3324 23.9716 27.5434 23.9716H13.2577C12.4687 23.9716 11.8291 23.332 11.8291 22.5431V18.2573ZM11.1147 28.2573C10.7202 28.2573 10.4004 28.5771 10.4004 28.9716C10.4004 29.3661 10.7202 29.6859 11.1147 29.6859H29.6861C30.0806 29.6859 30.4004 29.3661 30.4004 28.9716C30.4004 28.5771 30.0806 28.2573 29.6861 28.2573H11.1147Z"
                fill="#C4C4C4"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
