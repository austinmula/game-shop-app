import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import "./card.scss";
const CardContainer = ({ game }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {});

  const handleShow = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <Link to={`/games/${game.id}`} state={{ id: game.id }}>
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
          <a className="py-2 px-3 text-sm" onClick={handleShow}>
            Buy
          </a>
        </div>
      </div>
      {show ? (
        <Modal
          title={game.name}
          id={game.id}
          onClose={handleClose}
          show={show}
          price={game.price}
        ></Modal>
      ) : null}
    </>
  );
};

export default CardContainer;
