import { useState } from "react";
import { games } from "../../data/games";
import CardContainer from "../card/CardContainer";
import PillsContainer from "./filter-pills/PillsContainer";
import "./gridcontainer.scss";

const GamesContainer = () => {
  const [allgames, setAllGames] = useState(games);
  const filterItems = (curcat) => {
    const newItem = allgames.filter((game) =>
      game.console.some((elem) => elem === curcat)
    );
    // const newItem = allgames.filter((newVal) => {
    //   return newVal.category === curcat;
    // });
    console.log(newItem);
    setAllGames(newItem);
  };
  return (
    <div className="grid-container">
      <PillsContainer filterItems={filterItems} />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 w-full">
        {allgames.map((game) => (
          <CardContainer game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default GamesContainer;
