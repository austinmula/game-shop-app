import ImageSlider from "../components/header/ImageSlider";
const slides = [
  {
    url: "https://notagamer.net/wp-content/uploads/2023/01/Saint-League-of-Legends.jpeg",
    caption: "League of Legends",
  },
  {
    url: "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg",
    caption: "Call of Duty",
  },
  {
    url: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c",
    caption: "Call of Duty",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default HomePage;
