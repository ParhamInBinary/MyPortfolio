import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BackEndCard } from "../components/BackEndCard";
import { FrontEndCard } from "../components/FrontEndCard";
import { GraphicDesignCard } from "../components/GraphicDesignCard";
import { graphicDesignSkills } from "../data/GraphicDesignSkills";
import { backEndSkills } from "../data/backEndSkills";
import { frontEndSkills } from "../data/frontEndSkills";
import "../styles/HomePage.css";

export function HomePage() {
  return (
    <div className="container">
      <div className="presentation">
        <div className="profile">
          <div className="introText">
            <p>Fullstack developer</p>
            <span>Parham Berenjian</span>
            <p>Based in Gothenburg, Sweden</p>
          </div>

          <div className="picture"></div>
        </div>
        <div className="logos">
          <NavLink to="https://github.com/ParhamInBinary">
            <div>
              <FaGithubSquare />
            </div>
          </NavLink>

          <NavLink to="https://www.linkedin.com/in/parham-berenjian-5a2a26196/">
            <div>
              <FaLinkedin />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="skillContainer">
        
        <p>My qualifications in:</p>
        <div className="titleContainer">
          <div className="skillTitle">FrontEnd</div>
          <div className="skillTitle">BackEnd</div>
          <div className="skillTitle">Graphic Design</div>
        </div>

        <div className="CardContainer">
          {frontEndSkills.map((skill) => (
            <FrontEndCard key={skill.id} skill={skill} />
          ))}
        </div>

        {/* <div className="CardContainer">
          {backEndSkills.map((skill) => (
            <BackEndCard key={skill.id} skill={skill} />
          ))}
        </div>

        <div className="CardContainer">
          {graphicDesignSkills.map((skill) => (
            <GraphicDesignCard key={skill.id} skill={skill} />
          ))}
        </div> */}
      </div>
    </div>
  );
}
