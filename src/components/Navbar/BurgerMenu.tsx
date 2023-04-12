import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./burgerMenu.css";

export function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    const menu = document.querySelector(".menuCurtain");
    const body = document.querySelector('body');
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      menu?.classList.add("displayMenu");
      body?.classList.add('no-scroll')
    }
  };
  
  const handleCloseMenu = () => {
    const body = document.querySelector('body');
    const menu = document.querySelector(".menuCurtain");
    if (isMenuOpen) {
      setIsMenuOpen(false);
      menu?.classList.remove("displayMenu");
      body?.classList.remove('no-scroll')
    }
  };

  return (
    <div
      className="burger"
      onClick={() => handleOpenMenu()}
    >
      <div className="menuCurtain">
        <div
          className="xBtn"
          onClick={() => handleCloseMenu()}
        >
          &times;
        </div>
        <div className="linkContainer">
          <NavLink
            to="/"
            className="burgerLink"
            onClick={() => handleCloseMenu()}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="burgerLink"
            onClick={() => handleCloseMenu()}
          >
            About me
          </NavLink>
          <NavLink
            to="/projects"
            className="burgerLink"
            onClick={() => handleCloseMenu()}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className="burgerLink"
            onClick={() => handleCloseMenu()}
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
