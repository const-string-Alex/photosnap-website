import "./hero.css";

interface HeroProps {
  image: string;
  title: string;
  content: string;
}

function Hero(props: HeroProps) {
  return (
    <section className="hero">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="hero-image"
      ></div>
      <div className="hero-info">
        <h2 className="hero-title">{props.title}</h2>
        <p className="hero-content">{props.content}</p>
      </div>
    </section>
  );
}

export default Hero;
