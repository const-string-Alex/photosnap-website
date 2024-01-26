import "./stories-page.css";

import Navbar from "../../components/Navbar/Navbar";
import Story from "../../components/Story/Story";
import Footer from "../../components/Footer/Footer";

import { STORIES } from "../../data/stories";

interface StoresPageProps {
  imageType: string;
}

function StoriesPage(props: StoresPageProps) {
  const stories = STORIES.map((story) => {
    return (
      <Story
        key={Math.random() * STORIES.length}
        image={story.images[props.imageType as "mobile" | "tablet" | "desktop"]}
        date={story.date}
        title={story.title}
        author={story.author}
      />
    );
  });

  return (
    <>
      <Navbar />
      <main>
        <section className="story-hero">
          <div className="story-hero-image"></div>
          <div className="story-hero-info">
            <p className="story-hero-featured">Last month's featured story</p>
            <h2 className="story-hero-title">Hazy full moon of appalachia</h2>
            <p>
              <span className="gray">March 2nd 2020</span> by John Appleseed
            </p>
            <p className="story-hero-description">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <a href="#" className="story-hero-link">
              Read the story
            </a>
          </div>
        </section>
      </main>
      <section className="story-page-stories">{stories}</section>
      <Footer />
    </>
  );
}

export default StoriesPage;
