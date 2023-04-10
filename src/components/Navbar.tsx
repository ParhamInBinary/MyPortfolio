import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { BurgerMenu } from "./BurgerMenu";

export function Navbar() {
  return (
    <header className="navbar">
      <div style={{ flex: 1 }}>
        <div className="badge">
          {"<ParhamBerenjianDev />"}
        </div>
      </div>

      <div className="nav">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/about">
          About me
        </NavLink>
        <NavLink className="link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="link" to="/resume">
          Resume
        </NavLink>
      </div>
      <BurgerMenu />
    </header>
  );
}
