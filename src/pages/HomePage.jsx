import ContainerInner from "../components/grid-container/ContainerInner";
import SectionHeading from "../components/grid-container/SectionHeading";
// import GamesContainer from "../components/grid-container/GamesContainer";
import Hero from "../components/header/hero/Hero";
import { games } from "../data/games";

const HomePage = () => {
  function shuffle(shuffled_arr) {
    let currentIndex = shuffled_arr.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [shuffled_arr[currentIndex], shuffled_arr[randomIndex]] = [
        shuffled_arr[randomIndex],
        shuffled_arr[currentIndex],
      ];
    }

    return shuffled_arr;
  }

  return (
    <div className="container">
      <Hero />
      <SectionHeading title={"Recent Games"} />
      <ContainerInner
        filteredItems={shuffle([...games])}
        lastindex={4}
        firstindex={0}
      />
      <SectionHeading title={"Top Rated Games"} />
      <ContainerInner
        filteredItems={[...games].sort((a, b) => b.rating - a.rating)}
        lastindex={4}
        firstindex={0}
      />
    </div>
  );
};

export default HomePage;
