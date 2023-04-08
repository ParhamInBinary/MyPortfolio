import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./styles/HomePage.css";

export function HomePage() {
  return (
    <div className="container">
      <div className="introText">
        <p>Fullstack developer</p>
        <span>Parham Berenjian</span>
        <p>Based in Gothenburg, Sweden</p>

        <div className="logos">
          <NavLink to='https://github.com/ParhamInBinary'>
            <div>
            <FaGithubSquare />
            </div>
          </NavLink>

          <NavLink to='https://www.linkedin.com/in/parham-berenjian-5a2a26196/'>
            <div>
            <FaLinkedin />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
