import { FrontEndSkill } from "../../../data/frontEndSkills";
import "./skillCard.css";

interface Skill {
  skill: FrontEndSkill;
}

export function FrontEndCard({ skill }: Skill) {
  return (
    <div className="outerBody">
      <div className="borderAnimaion"></div>
      <div className="cardBody">
        <div className="icon">
          <div className="backgroundBlob"></div>
          {skill.image}
        </div>
        <p>{skill.name}</p>
      </div>
    </div>
  );
}
