import "./feature-page.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Feature from "../../components/Feature/Feature";
import Beta from "../../components/Beta/Beta";
import Footer from "../../components/Footer/Footer";

import { HEROS } from "../../data/heros";
import { FEATURES } from "../../data/features";

interface FeaturesPageProps {
  imageType: string;
}

function FeaturesPage(props: FeaturesPageProps) {
  const hero = (
    <Hero
      image={
        HEROS[0].images[props.imageType as "mobile" | "tablet" | "desktop"]
      }
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
    <>
      <Navbar />
      <main>
        {hero}
        <section className="feature-page-features">{features}</section>
        <Beta />
      </main>
      <Footer />
    </>
  );
}

export default FeaturesPage;
