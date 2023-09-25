import styles from "./project.module.css";

import SingleBlur from "../background/single-blur/SingleBlur";
import MovDisplay from "../mov-display/MovDisplay";
import TechStack from "../tech-stack/TechStack";
import ButtonLink from "../button/ButtonLink";
import H2 from "../h2/H2";
import P from "../paragraph/P";

import { Project } from "@/data/types";
import { PROJECT } from "@/data/constants";

export default function Project({
  description,
  fakeUrl,
  mp4,
  githubLink,
  liveLink,
  name,
  techStack,
}: Project) {
  const formattedName = name.replaceAll(/ /g, '-');
  return <section className={styles.project} id={`${PROJECT}-${formattedName}`}>
    <SingleBlur />
    <section className={styles.projectInfo}>
      <div className={styles.projectHeader}>
        <H2>{name}</H2>
        <P>{description}</P>
      </div>
      <TechStack tech={techStack} />
      <div className={styles.buttonWrapper}>
        <ButtonLink url={liveLink} isPrimary>View Live</ButtonLink>
        <ButtonLink url={githubLink}>Github</ButtonLink>
      </div>
    </section>
    {/* <aside className={styles.movWrapper}> */}
    <MovDisplay mp4={mp4} fakeUrl={fakeUrl} />
    {/* </aside> */}
  </section>
}
