import { useLocation } from "react-router-dom";
import Heading from "../components/Heading";

const SingleGame = () => {
  let { state } = useLocation();
  return (
    <div className="container">
      <Heading title={state.game.name} subtitle={state.game.description} />

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 mt-9 p-6">
        <div className="contacts-content">
          <img src={state.game.image} alt={state.game.name} />
        </div>
        <div className="contacts-form p-3"></div>
      </div>
    </div>
  );
};

export default SingleGame;
