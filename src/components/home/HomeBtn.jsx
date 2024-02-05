import "../../styles/home/navbar.css";

const HomeBtn = ({
  setPageNumber,
  setSearchValue,
  isCurrentPage,
  setIsCurrentPage,
  setValueTarget,
}) => {
  function handleHome(e) {
    e.preventDefault();
    setIsCurrentPage(true);
    setPageNumber(1);
    setSearchValue("");
    setValueTarget("");
  }

  return (
    <button
      id={isCurrentPage ? "text-active" : "text-inactive"}
      onClick={(e) => handleHome(e)}>
      Home
    </button>
  );
};

export default HomeBtn;
