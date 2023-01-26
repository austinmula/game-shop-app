import { useEffect, useState } from "react";
import { games } from "../../data/games";
import CardContainer from "../card/CardContainer";
import PillsContainer from "./filter-pills/PillsContainer";
import "./gridcontainer.scss";

const GamesContainer = () => {
  const [allgames, setAllGames] = useState(games);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const num_pages = Math.ceil(filteredItems.length / itemsPerPage);

  let lastindex = itemsPerPage * currentPage;
  let firstindex = lastindex - itemsPerPage;

  useEffect(() => {
    setFilteredItems(allgames);
  }, []);

  const changePage = (num) => setCurrentPage(num);

  const filterByConsole = (sk) => {
    changePage(1);
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
    changePage(1);
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
        {filteredItems?.slice(firstindex, lastindex).map((game) => (
          <CardContainer game={game} key={game.id} />
        ))}
      </div>
      <div className="pagination-section">
        {[...Array(num_pages)].map((item, index) => (
          <div
            key={index}
            style={{ background: currentPage === index + 1 && "#ef8354" }}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesContainer;
