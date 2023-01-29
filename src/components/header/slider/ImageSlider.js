import { useEffect, useRef, useState } from "react";
// import { games } from "../../../data/games";
import "./slider.scss";

const ImageSlider = ({ games }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === games.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {};
  }, [current, games.length]);

  return (
    <div className="slides-container flex-col md:flex-row gap-2 md:gap-0">
      <div className="slideshow w-full md:w-3/5">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-current * 100}%, 0, 0)` }}
        >
          {games.map((game) => (
            <img
              src={`${game.image}`}
              className="slide"
              key={game.id}
              alt={game.name}
            />
          ))}
        </div>
      </div>
      <div className="slide-text-container w-full md:w-2/5 px-6 py-3">
        <h3 className="text-2xl lg:text-6xl md:text-5xl">
          Peak Games Collection
        </h3>
        <p className="text-xs md:text-lg leading-6">
          Your plug for all recent, highest rated playstation and PC games
        </p>
        <button className="px-5 py-2 text-sm md:text-md md:px-6 md:py-4 w-4/5 md:w-2/5 ">
          Explore Game
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
