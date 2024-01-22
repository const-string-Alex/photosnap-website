import "./feature.css";

interface FeatureProps {
  image: string;
  title: string;
  content: string;
}

function Feature(props: FeatureProps) {
  return (
    <div className="feature">
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="feature-image"
      ></div>
      <h2 className="feature-title">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Feature;
