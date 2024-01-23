import "./pricing-page.css";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Package from "../../components/Package/Package";
import Beta from "../../components/Beta/Beta";

import { HEROS } from "../../data/heros";
import { PACKAGES } from "../../data/packages";

function PricingPage() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [imageType, setImageType] = useState<string>("");
  const [isYearly, setIsYearly] = useState<boolean>(false);

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
      image={HEROS[1].images[imageType as "mobile" | "tablet" | "desktop"]}
      title={HEROS[1].title}
      content={HEROS[1].content}
    />
  );

  const packages = PACKAGES.map((p) => {
    return (
      <Package
        key={p.name}
        name={p.name}
        description={p.description}
        price={p.price}
        isYearly={isYearly}
      />
    );
  });

  function handleSwitchClick() {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  }

  return (
    <main>
      <Navbar />
      {hero}
      <section className="packages">
        <div className="plan-title">
          <h2 style={{ color: isYearly ? "#c9c9c9" : "" }}>Monthly</h2>
          <label className="switch">
            <input type="checkbox" onClick={handleSwitchClick} />
            <span className="slider round"></span>
          </label>
          <h2 style={{ color: isYearly ? "" : "#c9c9c9" }}>Yearly</h2>
        </div>
        {packages}
      </section>
      <Beta />
    </main>
  );
}

export default PricingPage;
