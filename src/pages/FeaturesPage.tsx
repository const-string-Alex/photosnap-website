import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

import { HEROS } from "../data/heros";

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

  return (
    <>
      <Navbar />
      {hero}
      <p>features page</p>
    </>
  );
}

export default FeaturesPage;
