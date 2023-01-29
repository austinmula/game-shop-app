import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import "./card.scss";
const CardContainer = ({ game }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Link to={`/games/${game.id}`} state={{ game }}>
            <img src={game.image} alt={game.name} />
          </Link>
        </div>
        <div className="card-body">
          <h3>{game.name}</h3>
          <small>kshs. {game.price}</small>
        </div>
        <div className="card-footer">
          <div className="rating">
            {[...Array(5)].map((item, index) => {
              let r = game.rating;
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
          </div>
          <a className="py-2 px-3 text-sm" onClick={() => setShow(true)}>
            Buy
          </a>
        </div>
      </div>
      {show ? (
        <Modal
          title={game.name}
          onClose={handleClose}
          show={show}
          price={game.price}
        ></Modal>
      ) : null}
    </>
  );
};

export default CardContainer;
