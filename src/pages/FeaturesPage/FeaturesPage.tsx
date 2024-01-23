import "./feature-page.css";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Beta from "../../components/Beta/Beta";

import { HEROS } from "../../data/heros";
import { FEATURES } from "../../data/features";

function FeaturesPage() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [imageType, setImageType] = useState<string>("");

  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }

    if (screenWidth < 768) {
      setImageType("mobile");
    } else if (screenWidth < 1440) {
      setImageType("tablet");
    } else {
      setImageType("desktop");
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [screenWidth]);

  const hero = (
    <Hero
      image={HEROS[0].images[imageType as "mobile" | "tablet" | "desktop"]}
      title={HEROS[0].title}
      content={HEROS[0].content}
    />
  );

  const features = FEATURES.map((feature) => {
    return (
      <Feature
        key={Math.random() * FEATURES.length}
        image={feature.image}
        title={feature.title}
        content={feature.content}
      />
    );
  });

  return (
    <main>
      <Navbar />
      {hero}
      <section className="feature-page-features">{features}</section>
      <Beta />
    </main>
  );
}

export default FeaturesPage;
