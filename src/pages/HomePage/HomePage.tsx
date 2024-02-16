import "./home-page.css";

import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Story from "../../components/Story/Story";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

import { ABOUTS } from "../../data/abouts";
import { STORIES } from "../../data/stories";
import { FEATURES } from "../../data/features";

interface HomePageProps {
  imageType: string;
}

function HomePage(props: HomePageProps) {
  const about = ABOUTS.map((about) => {
    return (
      <About
        key={Math.random() * ABOUTS.length}
        image={about.images[props.imageType as "mobile" | "tablet" | "desktop"]}
        title={about.title}
        description={about.description}
        isHero={about.isHero}
      />
    );
  });

  const firstFourStories = STORIES.slice(0, 4);
  const stories = firstFourStories.map((story) => {
    return (
      <Story
        key={Math.random() * firstFourStories.length}
        image={story.images[props.imageType as "mobile" | "tablet" | "desktop"]}
        title={story.title}
        author={story.author}
      />
    );
  });

  const firstThreeFeatures = FEATURES.slice(0, 3);
  const features = firstThreeFeatures.map((feature) => {
    return (
      <Feature
        key={Math.random() * firstThreeFeatures.length}
        image={feature.image}
        title={feature.title}
        content={feature.content}
      />
    );
  });

  return (
    <>
      <Navbar />
      <main>{about}</main>
      <section className="home-stories">{stories}</section>
      <section className="home-features">{features}</section>
      <Footer />
    </>
  );
}

export default HomePage;
