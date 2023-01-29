import { GET_GAMES, GET_ONE_GAME } from "./type";
import { getAllGames, getGameById } from "../services/games.service";

export const fetchAllGames = () => async (dispatch) => {
  try {
    const res = await getAllGames();
    dispatch({
      type: GET_GAMES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchGameByID = (id) => async (dispatch) => {
  try {
    const res = await getGameById(id);
    console.log(res);
    dispatch({
      type: GET_ONE_GAME,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
