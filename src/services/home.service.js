import axios from "axios";

const { REACT_APP_API_KEY, REACT_APP_URL } = process.env;

export const getData = async (pageNumber, searchValue) => {
  const petition = await axios.get(
    `${REACT_APP_URL}/games?key=${REACT_APP_API_KEY}&page=${pageNumber}&search=${searchValue}`
  );
  const gameResults = petition.data.results;
  return gameResults;
};

export const getAllGameData = (gameData) => {
  let completeGameData;
  const promises = [];

  gameData.forEach((game) => {
    const gameId = game.id;

    const gameFetch = axios.get(
      `${REACT_APP_URL}/games/${gameId}?key=${REACT_APP_API_KEY}`
    );

    const allGames = gameFetch
      .then((data) => {
        completeGameData = Object.assign(game, data.data);

        return completeGameData;
      })
      .catch((err) => {
        console.log(err);
      });

    promises.push(allGames);
  });

  return Promise.all(promises);
};

export const getTrailer = (gameId) => {
  const response = axios.get(
    `${REACT_APP_URL}/games/${gameId}/movies?key=${REACT_APP_API_KEY}`
  );

  return response;
};
