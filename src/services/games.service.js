import http from "../http-common";

export const getAllGames = () => {
  return http.get("/api/games/");
};

export const getGameById = (id) => {
  return http.get("/api/games/" + id);
};

export const createNewGame = (data) => {
  return http.post("/api/games/add", data);
};

export const deleteGame = (id) => {
  return http.delete("/api/games/" + id);
};
