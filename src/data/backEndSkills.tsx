import { ReactNode } from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export interface BackEndSkill {
  id: number;
  name: string;
  image: ReactNode;
}
export const backEndSkills: BackEndSkill[] = [
  {
    id: 1,
    name: "Nodejs",
    image: <FaNodeJs />,
  },
  {
    id: 2,
    name: "MongoDB",
    image: <SiMongodb />,
  },
];
