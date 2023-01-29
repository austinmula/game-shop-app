import "./hero.scss";
import ImageSlider from "../slider/ImageSlider";

const Hero = ({ games }) => {
  return (
    <div className="hero">
      <ImageSlider games={games} />
    </div>
  );
};

export default Hero;
