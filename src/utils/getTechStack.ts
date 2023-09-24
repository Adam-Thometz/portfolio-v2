import { TechStack } from "../data/types";
import techStackIcons from "../data/techStackIcons";

export default function getTechStack(techs: string[]): TechStack[] {
  return techs.map(tech => ({ name: tech, icon: techStackIcons[tech] }));
}
