import { GET_GAMES, GET_ONE_GAME } from "../actions/type";

const initial_state = { all_games: [], game: {}, filtered_games: [] };

function gameReducer(state = initial_state, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        all_games: action.payload,
      };

    case GET_ONE_GAME:
      return {
        ...state,
        game: action.payload,
      };

    default:
      return state;
  }
}

export default gameReducer;
