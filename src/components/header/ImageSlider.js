import { useEffect, useState } from "react";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const sliderContainer = {
    width: "700px",
    height: "350px",
    borderRadius: "10px",
    margin: "auto",
    backgroundImage: `url(${slides[current].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "ease 1000ms",
  };

  useEffect(() => {
    setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );
    // console.log(current);
    return () => {};
  }, [current]);
  return (
    <div style={sliderContainer}>
      <p>Slider</p>
    </div>
  );
};

export default ImageSlider;
