import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <header>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About me</NavLink>
            <NavLink to="/projects">Project</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </header>
    )
}