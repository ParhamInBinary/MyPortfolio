import { ReactNode } from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export interface FrontEndSkill {
    id: number,
    name: string,
    image: ReactNode,
}
export const frontEndSkills: FrontEndSkill[] = [
    {
        id: 1,
        name: 'React',
        image: <FaReact />,
    },
    {
        id: 2,
        name: 'Javascript',
        image: <IoLogoJavascript />,
    },
    {
        id: 3,
        name: 'HTML',
        image: <FaHtml5 />,
    },
    {
        id: 4,
        name: 'CSS',
        image: <FaCss3Alt />,
    },
]