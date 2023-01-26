import { all } from "axios";
import { useEffect, useState } from "react";
import { games } from "../../data/games";
import CardContainer from "../card/CardContainer";
import PillsContainer from "./filter-pills/PillsContainer";
import "./gridcontainer.scss";

const GamesContainer = () => {
  const [allgames, setAllGames] = useState(games);
  const [filteredItems, setFilteredItems] = useState([]);
  // const [sk, setFilterKey] = useState("");

  useEffect(() => {
    setFilteredItems(allgames);
    // filterByConsole();
  }, []);

  const filterByConsole = (sk) => {
    const items = allgames.filter((key) => {
      if (sk === "") {
        return key;
      } else if (key.console.some((el) => el.includes(sk))) {
        return key;
      }
    });

    setFilteredItems(items);
  };

  const filterByName = (sk) => {
    const items = allgames.filter((key) => {
      if (sk === "") {
        return key;
      } else if (key.name.toLocaleLowerCase().includes(sk)) {
        return key;
      }
    });

    setFilteredItems(items);
  };

  return (
    <div className="grid-container">
      <PillsContainer
        // setFilterKey={setFilterKey}
        filterByConsole={filterByConsole}
        filterByName={filterByName}
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 w-full">
        {filteredItems?.map((game) => (
          <CardContainer game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default GamesContainer;
