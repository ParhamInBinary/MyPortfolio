import { GraphicDesignSkill } from "../data/GraphicDesignSkills";
import "../styles/skillCard.css";

interface Skill {
  skill: GraphicDesignSkill;
}

export function GraphicDesignCard({ skill }: Skill) {
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
