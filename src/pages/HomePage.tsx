import { useState } from "react";
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
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false);
  const [showGraphicDesign, setShowGraphicDesign] =
    useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const CardContainer = document.querySelector(
    ".CardContainer"
  );
  const idleAnimation = document.querySelector(
    ".idleAnimation"
  );

  const handleMouseOver = (skillType: string) => {
    setShowSkills(true);
    CardContainer?.classList.add("showSkills");
    idleAnimation?.classList.add("hideIdle");

    if (!showSkills) {
      if (skillType === "frontEnd") {
        setShowFrontEnd(true);
        setShowBackEnd(false);
        setShowGraphicDesign(false);
      } else if (skillType === "backEnd") {
        setShowFrontEnd(false);
        setShowBackEnd(true);
        setShowGraphicDesign(false);
      } else if (skillType === "graphicDesign") {
        setShowFrontEnd(false);
        setShowBackEnd(false);
        setShowGraphicDesign(true);
      }
    }
  };

  const handleHideSkills = () => {
    setShowSkills(false);
    CardContainer?.classList.remove("showSkills");
    idleAnimation?.classList.remove("hideIdle");
  };

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
          <div
            className="skillTitle"
            onMouseOver={() => handleMouseOver("frontEnd")}
            onMouseLeave={() => handleHideSkills()}
          >
            FrontEnd
          </div>
          <div
            className="skillTitle"
            onMouseOver={() => handleMouseOver("backEnd")}
            onMouseLeave={() => handleHideSkills()}
          >
            BackEnd
          </div>
          <div
            className="skillTitle"
            onMouseOver={() =>
              handleMouseOver("graphicDesign")
            }
            onMouseLeave={() => handleHideSkills()}
          >
            Graphic Design
          </div>
        </div>

        {!showSkills && (
          <div className="idleAnimation"></div>
        )}
        <div className="CardContainer">
          {showFrontEnd &&
            frontEndSkills.map((skill) => (
              <FrontEndCard key={skill.id} skill={skill} />
            ))}
          {showBackEnd &&
            backEndSkills.map((skill) => (
              <BackEndCard key={skill.id} skill={skill} />
            ))}
          {showGraphicDesign &&
            graphicDesignSkills.map((skill) => (
              <GraphicDesignCard
                key={skill.id}
                skill={skill}
              />
            ))}
        </div>
      </div>

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
