import { games } from "../../data/games";
import CardContainer from "../card/CardContainer";
import "./gridcontainer.scss";

const GamesContainer = ({ title }) => {
  return (
    <div className="grid-container">
      <h2>{title}</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 w-full">
        {games.map((game) => (
          <CardContainer game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default GamesContainer;
