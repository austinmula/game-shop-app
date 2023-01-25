import GamesContainer from "../components/grid-container/GamesContainer";
import Hero from "../components/header/hero/Hero";

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
    url: "https://tech4gamers.com/wp-content/uploads/2022/07/God-of-War-Ragnarok.jpg",
    caption: "God of War Ragnarok",
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <GamesContainer title={"Top rated games"} />
      <GamesContainer title={"Recent games"} />
    </div>
  );
};

export default HomePage;
