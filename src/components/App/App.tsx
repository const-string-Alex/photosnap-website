import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FeaturesPage from "../../pages/FeaturesPage/FeaturesPage";
import HomePage from "../../pages/HomePage/HomePage";
import PricingPage from "../../pages/PricingPage/PricingPage";
import StoriesPage from "../../pages/StoriesPage/StoriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/stories" Component={StoriesPage} />
        <Route path="/features" Component={FeaturesPage} />
        <Route path="/pricing" Component={PricingPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
