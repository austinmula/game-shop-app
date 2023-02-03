import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import "./admin.scss";
const Purchases = () => {
  const { purchases } = useContext(AdminContext);

  return (
    <div className="game">
      <div className="game-form">
        <h3>Purchases</h3>

        <table className="table-auto text-gray-300 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">User</th>
              <th className="px-4 py-2 border">Game</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td className="border px-4 py-2"> {purchase.id}</td>
                <td className="border px-4 py-2"> {purchase.amount}</td>
                <td className="border px-4 py-2"> {purchase.user_id}</td>
                <td className="border px-4 py-2"> {purchase.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Purchases;
