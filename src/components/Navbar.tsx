import { NavLink } from "react-router-dom";
import './navbar.css';

export function Navbar() {
    return (
        <header className="navbar">
            <div className="badge">{'<ParhamBerenjianDev />'}</div>
            
            <div className="nav">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/about">About me</NavLink>
            <NavLink className="link" to="/projects">Projects</NavLink>
            <NavLink className="link" to="/resume">Resume</NavLink>
            </div>
        </header>
    )
}