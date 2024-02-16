import "./feature.css";

interface FeatureProps {
  image: string;
  title: string;
  content: string;
}

function Feature(props: FeatureProps) {
  return (
    <div className="feature">
      <img src={props.image} alt={props.title} className="feature-img" />
      <h2 className="feature-title">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Feature;
