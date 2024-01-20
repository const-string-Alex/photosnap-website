import "./about.css";
import blackArrow from "/assets/shared/desktop/blackArrow.svg";
import whiteArrow from "/assets/shared/desktop/whiteArrow.svg";

interface AboutProps {
  img: string;
  title: string;
  description: string;
  isHero: boolean;
}

function About(props: AboutProps) {
  const heroStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };

  return (
    <section className="about">
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className="about-image"
      ></div>
      <div style={props.isHero ? heroStyle : {}} className="about-info">
        <h2 className="about-title">{props.title}</h2>
        <p className="about-paragraph">{props.description}</p>
        <a href="#" className="about-link">
          Get an invite{" "}
          <img src={props.isHero ? whiteArrow : blackArrow} alt="arrow" />
        </a>
      </div>
    </section>
  );
}

export default About;
