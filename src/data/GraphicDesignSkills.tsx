import { ReactNode } from "react";
import { SiAdobephotoshop, SiFigma } from "react-icons/si";
import { BsBrushFill } from "react-icons/bs";

export interface GraphicDesignSkill {
  id: number;
  name: string;
  image: ReactNode;
}
export const graphicDesignSkills: GraphicDesignSkill[] = [
  {
    id: 1,
    name: "Procreate",
    image: <BsBrushFill />,
  },
  {
    id: 2,
    name: "Photoshop",
    image: <SiAdobephotoshop />,
  },
  {
    id: 3,
    name: "Figma",
    image: <SiFigma />,
  },
];
