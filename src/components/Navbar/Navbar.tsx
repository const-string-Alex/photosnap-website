import { useEffect, useState } from "react";
import "./navbar.css";

import logo from "/assets/shared/desktop/logo.svg";
import menu from "/assets/shared/mobile/menu.svg";
import close from "/assets/shared/mobile/close.svg";

function Navbar() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [displayStyle, setDisplayStyle] = useState<string>("none");

  useEffect(() => {
    function handleWindowResize() {
      setScreenWidth(window.innerWidth);
    }

    if (screenWidth < 768) {
      setDisplayStyle("none");
    } else {
      setDisplayStyle("flex");
      setIsMenu(false);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.addEventListener("resize", handleWindowResize);
    };
  }, [screenWidth]);

  function handleMenuClick(): void {
    setIsMenu((prevIsMenu) => !prevIsMenu);
    setDisplayStyle((prevDisplayStyle) => {
      return prevDisplayStyle === "none" ? "block" : "none";
    });
  }

  return (
    <nav className="navbar">
      <ul className="nav-icons">
        <li>
          <a href="/">
            <img src={logo} alt="Photosnap logo" className="logo" />
          </a>
        </li>
        <li>
          <button className="menu-btn" onClick={handleMenuClick}>
            <img src={isMenu ? close : menu} alt="Menu bar" />
          </button>
        </li>
      </ul>
      <ul style={{ display: displayStyle }} className="page-links">
        <li className="page">
          <a href="/stories" className="page-href">
            Stories
          </a>
        </li>
        <li className="page">
          <a href="/features" className="page-href">
            Features
          </a>
        </li>
        <li className="page">
          <a href="/pricing" className="page-href">
            Pricing
          </a>
        </li>
      </ul>
      <button style={{ display: displayStyle }} className="invite-btn">
        Get an invite
      </button>
    </nav>
  );
}

export default Navbar;
