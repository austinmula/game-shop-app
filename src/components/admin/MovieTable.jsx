import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../../actions/games";
import "./admin.scss";
const MovieTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  const { all_games } = useSelector((state) => state.games);
  return (
    <div className="game">
      <div className="game-form">
        <h3>All Games</h3>

        <table class="table-auto text-gray-300">
          <thead>
            <tr>
              <th class="px-4 py-2 border">Game Name</th>
              <th class="px-4 py-2 border">Publisher</th>
              <th class="px-4 py-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {all_games.map((game) => (
              <tr key={game.id}>
                <td class="border px-4 py-2"> {game.name}</td>

                <td class="border px-4 py-2"> {game.publisher}</td>
                <td class="border px-4 py-2"> {game.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MovieTable;
