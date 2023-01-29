import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "../../actions/games";
// import { games } from "../../data/games";
// import CardContainer from "../card/CardContainer";
import ContainerInner from "./ContainerInner";
import PillsContainer from "./filter-pills/PillsContainer";
import "./gridcontainer.scss";

const GamesContainer = () => {
  // const [allgames, setAllGames] = useState(games);
  const dispatch = useDispatch();

  const { all_games } = useSelector((state) => state.games);

  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const num_pages = Math.ceil(filteredItems.length / itemsPerPage);

  let lastindex = itemsPerPage * currentPage;
  let firstindex = lastindex - itemsPerPage;

  useEffect(() => {
    dispatch(fetchAllGames());
    setFilteredItems(all_games);
  }, []);

  const changePage = (num) => setCurrentPage(num);

  const filterByConsole = (sk) => {
    changePage(1);
    const items = all_games.filter((key) => {
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
    const items = all_games.filter((key) => {
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
        filterByConsole={filterByConsole}
        filterByName={filterByName}
      />

      <ContainerInner
        filteredItems={filteredItems}
        lastindex={lastindex}
        firstindex={firstindex}
      />

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
