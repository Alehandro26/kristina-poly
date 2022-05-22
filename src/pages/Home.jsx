import AnimatedPage from "../AnimatedPage";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import Main from "../components/Main";
import Rewievs from "../components/Rewievs";
import Slides from "../components/Slides";

function Home() {
  AOS.init({
    duration: 800,
    offset: 50,
    once: false,
  });
  return (
    <AnimatedPage>
      <>
        <Slides></Slides>
        <Main></Main>
        <Cards></Cards>
        <Gallery></Gallery>
        <Rewievs></Rewievs>
      </>
    </AnimatedPage>
  );
}

export default Home;
