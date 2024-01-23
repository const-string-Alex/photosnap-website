import "./beta.css";
import whiteArrow from "/assets/shared/desktop/whiteArrow.svg";

function Beta() {
  return (
    <section className="beta">
      <h2 className="beta-title">We're in beta. Get your invite today!</h2>
      <a href="#" className="beta-link">
        Get an invite <img src={whiteArrow} alt="White arrow" />
      </a>
    </section>
  );
}

export default Beta;
