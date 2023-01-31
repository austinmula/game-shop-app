import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGameByID } from "../actions/games";
import Heading from "../components/Heading";

const SingleGame = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchGameByID(id));
  }, [dispatch, id]);
  const { game } = useSelector((state) => state.games);

  return (
    <div className="container">
      <Heading title={game.name} subtitle={game.description} />

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 mt-9 p-6">
        <div className="contacts-content">
          <img src={game.image} alt={game.name} />
        </div>
        <div className="px-3 flex flex-col gap-3">
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Rating :{" "}
              <span>
                {[...Array(5)].map((item, index) => {
                  let r = game?.rating;
                  return (
                    <span
                      key={index}
                      style={{
                        color: index < r ? "#FFD700" : "#dedded",
                        fontSize: "16px",
                      }}
                      className="star"
                    >
                      &#9733;
                    </span>
                  );
                })}
              </span>
            </h6>
          </div>
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Category :{" "}
              <span>
                {game.category && game.category.length > 0
                  ? game.category.map((i) => (
                      <span key={i.name}>{i.name} | </span>
                    ))
                  : null}
              </span>
            </h6>
          </div>
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Publisher : <span>{game.publisher}</span>
            </h6>
          </div>
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Available On :{" "}
              <span>
                {game.consoles && game.consoles.length > 0
                  ? game?.consoles.map((i) => (
                      <span key={i.name}>{i.name} | </span>
                    ))
                  : null}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
