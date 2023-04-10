import { BackEndSkill } from "../../../data/backEndSkills";
import "./skillCard.css";

interface Skill {
  skill: BackEndSkill;
}

export function BackEndCard({ skill }: Skill) {
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
