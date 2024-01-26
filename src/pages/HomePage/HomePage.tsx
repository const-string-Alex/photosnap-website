import "./home-page.css";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

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

  return (
    <>
      <Navbar />
      <main>{about}</main>
      <Footer />
    </>
  );
}

export default HomePage;
