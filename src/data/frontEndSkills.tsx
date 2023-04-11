import { ReactNode } from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

export interface FrontEndSkill {
  id: number;
  name: string;
  image: ReactNode;
}
export const frontEndSkills: FrontEndSkill[] = [
  {
    id: 1,
    name: "React",
    image: <FaReact />,
  },
  {
    id: 2,
    name: "Javascript",
    image: <SiJavascript />,
  },
  {
    id: 3,
    name: "Typescript",
    image: <SiTypescript />,
  },
  {
    id: 4,
    name: "HTML",
    image: <FaHtml5 />,
  },
  {
    id: 5,
    name: "CSS",
    image: <FaCss3Alt />,
  },
];
