import "./package.css";

interface PackageProps {
  name: string;
  description: string;
  price: number;
  isYearly: boolean;
}

function Package(props: PackageProps) {
  return (
    <article className="package">
      <h2 className="package-title">{props.name}</h2>
      <p className="package-description">{props.description}</p>
      <div className="package-pricing">
        <h3 className="package-price">
          $ {props.isYearly ? props.price * 10 : props.price}.00
        </h3>
        <p>per {props.isYearly ? "year" : "month"}</p>
      </div>
      <button className="pick-btn">Pick plan</button>
    </article>
  );
}

export default Package;
