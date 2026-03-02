import Hero from "../components/Hero";
import Intro from "../components/Intro";
import ChefSection from "../components/ChefSection";
import Favorites from "../components/Favorites";
import News from "../components/News";
import Notes from "../components/Notes";
import Stories from "../components/Stories";

function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <ChefSection />
      <Favorites />
      <News />
      <Notes />
      <Stories />
    </main>
  );
}

export default Home;