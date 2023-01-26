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
        <div className="px-3 flex flex-col gap-3">
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Rating :{" "}
              <span>
                {[...Array(5)].map((item, index) => {
                  let r = state.game.rating;
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
                {state.game.category.map((i) => (
                  <>{i} | </>
                ))}
              </span>
            </h6>
          </div>
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Publisher : <span>{state.game.publisher}</span>
            </h6>
          </div>
          <div className="py-3 px-2 bg-slate-700">
            <h6 className="text-white">
              Available On :{" "}
              <span>
                {state.game.console.map((i) => (
                  <>{i} | </>
                ))}
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
