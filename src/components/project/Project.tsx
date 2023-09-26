import styles from "./project.module.css";

import SingleBlur from "../background/single-blur/SingleBlur";
import MovDisplay from "../mov-display/MovDisplay";
import TechStack from "../tech-stack/TechStack";
import ButtonLink from "../button/ButtonLink";
import H2 from "../h2/H2";
import P from "../paragraph/P";

import { PROJECT } from "@/data/constants";
import { MainProject } from "@/data/types";

export default function Project({
  description,
  fakeUrl,
  mp4,
  liveLink,
  name,
  techStack,
}: MainProject) {
  const formattedName = name.replaceAll(/ /g, '-');
  return <section className={styles.project} id={`${PROJECT}-${formattedName}`}>
    <SingleBlur />
    <section className={styles.projectInfo}>
      <div className={styles.projectHeader}>
        <H2>{name}</H2>
        <P>{description}</P>
      </div>
      <TechStack tech={techStack} />
      <ButtonLink url={liveLink} isPrimary long>View Site</ButtonLink>
    </section>
    <MovDisplay mp4={mp4} fakeUrl={fakeUrl} />
  </section>
}
