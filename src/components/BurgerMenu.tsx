import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/burgerMenu.css";

export function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    const menu = document.querySelector(".menuCurtain");
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      menu?.classList.add("displayMenu");
    } else {
      setIsMenuOpen(false);
      menu?.classList.remove("displayMenu");
    }
  };

  return (
    <div className="burger" onClick={() => handleMenu()}>
      <div className="menuCurtain">
        <div className="xBtn" onClick={() => handleMenu()}>
          &times;
        </div>
        <div className="linkContainer">
          <NavLink to="/" className="burgerLink" onClick={() => handleMenu()}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="burgerLink"
            onClick={() => handleMenu()}
          >
            About me
          </NavLink>
          <NavLink
            to="/projects"
            className="burgerLink"
            onClick={() => handleMenu()}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className="burgerLink"
            onClick={() => handleMenu()}
          >
            Resume
          </NavLink>
        </div>
      </div>
      <div id="line1" className="burgerline"></div>
      <div id="line2" className="burgerline"></div>
      <div id="line3" className="burgerline"></div>
    </div>
  );
}
