import "./card.scss";
const CardContainer = ({ game }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={game.image} alt={game.name} />
      </div>
      <div className="card-body">
        <h3>{game.name}</h3>
        <small>kshs. 2,500</small>
      </div>
      <div className="card-footer">
        <div className="rating">
          {[...Array(5)].map((item, index) => {
            let r = game.rating;
            return (
              <span
                key={item}
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
        <a className="py-2 px-3 text-sm">Buy</a>
      </div>
    </div>
  );
};

export default CardContainer;
