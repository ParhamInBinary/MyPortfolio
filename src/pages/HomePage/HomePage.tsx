import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { graphicDesignSkills } from "../../data/GraphicDesignSkills";
import { backEndSkills } from "../../data/backEndSkills";
import { frontEndSkills } from "../../data/frontEndSkills";
import "./HomePage.css";
import { BackEndCard } from "./SkillContainer/BackEndCard";
import { FrontEndCard } from "./SkillContainer/FrontEndCard";
import { GraphicDesignCard } from "./SkillContainer/GraphicDesignCard";
import { SkillContainer } from "./SkillContainer/SkillContainer";

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

      <SkillContainer />

      <div className="skillContainerMobile">
        <p>My qualifications in:</p>

        <div className="skillTypeMobile">
          <span>FrontEnd</span>
          <div className="skillCardsMobile">
            {frontEndSkills.map((skill) => (
              <FrontEndCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div className="skillTypeMobile">
          <span>BackEnd</span>
          <div className="skillCardsMobile">
            {backEndSkills.map((skill) => (
              <BackEndCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div className="skillTypeMobile">
          <span>Graphic Design</span>
          <div className="skillCardsMobile">
            {graphicDesignSkills.map((skill) => (
              <GraphicDesignCard
                key={skill.id}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
