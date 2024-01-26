import "./home-page.css";

import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";

import { ABOUTS } from "../../data/abouts";

interface HomePageProps {
  imageType: string;
}

function HomePage(props: HomePageProps) {
  const about = ABOUTS.map((about) => {
    return (
      <About
        key={Math.random() * ABOUTS.length}
        img={about.images[props.imageType as "mobile" | "tablet" | "desktop"]}
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
