import { useState } from "react";
import { graphicDesignSkills } from "../../../data/GraphicDesignSkills";
import { backEndSkills } from "../../../data/backEndSkills";
import { frontEndSkills } from "../../../data/frontEndSkills";
import { BackEndCard } from "./BackEndCard";
import { FrontEndCard } from "./FrontEndCard";
import { GraphicDesignCard } from "./GraphicDesignCard";

export function SkillContainer() {
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false);
  const [showGraphicDesign, setShowGraphicDesign] =
    useState(false);

    
    const handleMouseOver = (skillType: string) => {
      const CardContainer = document.querySelector(
        ".CardContainer"
      );
      const idleAnimation = document.querySelector(
        ".idleAnimation"
      );
      CardContainer?.classList.add("showSkills");
      idleAnimation?.classList.add("hideIdle");
      
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
    };
    
    const handleHideSkills = () => {
      const CardContainer = document.querySelector(
        ".CardContainer"
      );
      const idleAnimation = document.querySelector(
        ".idleAnimation"
      );
    CardContainer?.classList.remove("showSkills");
    idleAnimation?.classList.remove("hideIdle");
  };

  return (
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

        <div className="idleAnimation"></div>
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
  );
}
