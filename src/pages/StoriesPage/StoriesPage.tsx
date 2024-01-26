import "./stories-page.css";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Story from "../../components/Story/Story";
import Footer from "../../components/Footer/Footer";

import { STORIES } from "../../data/stories";

function StoriesPage() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [imageType, setImageType] = useState<string>("mobile");

  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }

    if (screenWidth <= 425) {
      setImageType("mobile");
    } else {
      setImageType("desktop");
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [screenWidth]);

  const stories = STORIES.map((story) => {
    return (
      <Story
        key={Math.random() * STORIES.length}
        image={story.images[imageType as keyof typeof story.images]}
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
