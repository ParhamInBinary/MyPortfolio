import { GraphicDesignSkill } from '../data/GraphicDesignSkills';
import '../styles/skillCard.css';

interface Skill {
    skill: GraphicDesignSkill
}

export function GraphicDesignCard({ skill }: Skill) {
    return (
        <div className="cardBody">
            <div>{skill.image}</div>
            <p>{skill.name}</p>
        </div>
    )
}