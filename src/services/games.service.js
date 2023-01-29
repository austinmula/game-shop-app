import http from "../http-common";

export const getAllGames = () => {
  return http.get("/api/games/");
};
