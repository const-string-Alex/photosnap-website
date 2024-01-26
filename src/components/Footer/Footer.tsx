import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-social-media">
        <li>
          <a href="#" className="footer-media">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer-media">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer-media">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer-media">
            <i className="fa-brands fa-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="#" className="footer-media">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
      <ul className="footer-pages">
        <li>
          <a href="/" className="footer-page-link">
            Home
          </a>
        </li>
        <li>
          <a href="/stories" className="footer-page-link">
            Stories
          </a>
        </li>
        <li>
          <a href="/features" className="footer-page-link">
            Features
          </a>
        </li>
        <li>
          <a href="/pricing" className="footer-page-link">
            Pricing
          </a>
        </li>
      </ul>
      <p className="footer-copyright">
        &copy; Copyright 2019. All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
