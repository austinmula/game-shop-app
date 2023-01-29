import { GET_GAMES } from "./type";
import { getAllGames } from "../services/games.service";

export const fetchAllGames = () => async (dispatch) => {
  try {
    const res = await getAllGames();
    console.log(res);
    dispatch({
      type: GET_GAMES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
