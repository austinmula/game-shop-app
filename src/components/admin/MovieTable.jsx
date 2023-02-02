import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteGameOfId, fetchAllGames } from "../../actions/games";
import "./admin.scss";
const MovieTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  const { all_games } = useSelector((state) => state.games);

  const handleDelete = (id) => {
    try {
      dispatch(deleteGameOfId(id));
      toast.success("delete success");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="game">
      <div className="game-form">
        <h3>All Games</h3>

        <table className="table-auto text-gray-300 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Game Name</th>
              <th className="px-4 py-2 border">Publisher</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {all_games.map((game) => (
              <tr key={game.id}>
                <td className="border px-4 py-2"> {game.name}</td>

                <td className="border px-4 py-2"> {game.publisher}</td>
                <td className="border px-4 py-2"> {game.price}</td>
                <td className="border px-4 py-2">
                  {" "}
                  <button
                    className="px-4 py-2 bg-red-700 rounded-md"
                    onClick={() => handleDelete(game.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MovieTable;
