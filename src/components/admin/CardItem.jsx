import { useContext } from "react";
import { useSelector } from "react-redux";
import { AdminContext } from "../../context/adminContext";
import "./admin.scss";
const CardItem = () => {
  const { all_games } = useSelector((state) => state.games);
  const { total, users } = useContext(AdminContext);

  return (
    <div className=" mt-6 card-container gap-3 md:flex-row flex-col">
      <div className="card_cust w-full md:w-1/3 ">
        <h3>Total Games</h3>
        <div className="card-num">{all_games.length}</div>
      </div>

      <div className="card_cust w-full md:w-1/3">
        <h3>Total Users</h3>
        <div className="card-num">{users.length}</div>
      </div>
      <div className="card_cust w-full md:w-1/3">
        <h3>Total Purchases</h3>
        <div className="card-num">{total.toLocaleString("en-US")}</div>
      </div>
    </div>
  );
};

export default CardItem;
