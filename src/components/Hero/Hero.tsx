import "./hero.css";

interface HeroProps {
  image: string;
  title: string;
  content: string;
}

function Hero(props: HeroProps) {
  return (
    <section className="hero">
      <img src={props.image} alt={props.title} className="hero-image" />
      <div className="hero-info">
        <h2 className="hero-title">{props.title}</h2>
        <p className="hero-content">{props.content}</p>
      </div>
    </section>
  );
}

export default Hero;
