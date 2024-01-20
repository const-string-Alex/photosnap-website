import "./home-page.css";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";

import { ABOUTS } from "../../data/abouts";

function HomePage() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [imageType, setImageType] = useState<string>("mobile");

  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }

    if (screenWidth <= 425) {
      setImageType("mobile");
    } else if (screenWidth <= 768) {
      setImageType("tablet");
    } else {
      setImageType("desktop");
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [screenWidth]);

  // const imageType = "mobile";

  const about = ABOUTS.map((about) => {
    return (
      <About
        key={Math.random() * ABOUTS.length}
        img={about.images[imageType as keyof typeof about.images]}
        title={about.title}
        description={about.description}
        isHero={about.isHero}
      />
    );
  });

  /*
    CHANGE: change About img to background image

    UPDATE: interface to 
    images: {
      desktop: string; 0
      tablet: string; 1
      mobile: string; 2
    }

    const imageIndex in useEffect
  */

  return (
    <>
      <Navbar />
      {about}
      <p>Home page</p>
    </>
  );
}

export default HomePage;
