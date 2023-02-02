import {
  GET_GAMES,
  GET_ONE_GAME,
  CREATE_GAME,
  DELETE_GAME,
} from "../actions/type";

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

    case CREATE_GAME:
      return {
        ...state,
        all_games: [...state.all_games, action.payload],
      };

    case DELETE_GAME:
      return {
        ...state,
        all_games: state.all_games.filter(({ id }) => id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default gameReducer;
