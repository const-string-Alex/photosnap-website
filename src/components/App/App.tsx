import "./app.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeaturesPage from "../../pages/FeaturesPage/FeaturesPage";
import HomePage from "../../pages/HomePage/HomePage";
import PricingPage from "../../pages/PricingPage/PricingPage";
import StoriesPage from "../../pages/StoriesPage/StoriesPage";

function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage imageType={imageType} />} />
        <Route
          path="/stories"
          element={<StoriesPage imageType={imageType} />}
        />
        <Route
          path="/features"
          element={<FeaturesPage imageType={imageType} />}
        />
        <Route
          path="/pricing"
          element={<PricingPage imageType={imageType} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
