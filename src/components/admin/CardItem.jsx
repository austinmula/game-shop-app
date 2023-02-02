import { useSelector } from "react-redux";
import "./admin.scss";
const CardItem = ({ total, users }) => {
  const { all_games } = useSelector((state) => state.games);
  // const total = purchases?.reduce((a, b) => {
  //   return parseInt(a.amount) + parseInt(b.amount);
  // }, 0)
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
        <div className="card-num">{total}</div>
      </div>
    </div>
  );
};

export default CardItem;
