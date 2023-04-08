import { FrontEndSkill } from "../data/frontEndSkills";
import '../styles/skillCard.css';

interface Skill {
    skill: FrontEndSkill
}

export function FrontEndCard({ skill }: Skill) {
    return (
        <div className="outerBody">
            <div className="borderAnimaion"></div>
            <div className="cardBody">
                <div>{skill.image}</div>
                <p>{skill.name}</p>
            </div>
        </div>
    )
}