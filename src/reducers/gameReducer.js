import { GET_GAMES } from "../actions/type";

const initial_state = { all_games: [], game: {}, filtered_games: [] };

function gameReducer(state = initial_state, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        all_games: action.payload,
      };

    default:
      return state;
  }
}

export default gameReducer;
