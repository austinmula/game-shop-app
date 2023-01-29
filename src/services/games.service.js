import http from "../http-common";

export const getAllGames = () => {
  return http.get("/api/games/");
};

export const getGameById = (id) => {
  return http.get("/api/games/" + id);
};
