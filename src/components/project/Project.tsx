import styles from "./project.module.css";

import SingleBlur from "../background/single-blur/SingleBlur";
import GifDisplay from "../gif-display/GifDisplay";
import TechStack from "../tech-stack/TechStack";
import ButtonLink from "../button/ButtonLink";

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
  return <section className={styles.project} id={`${PROJECT}-${name.replaceAll(/ /g, '-')}`}>
    <SingleBlur />
    <section className={styles.projectInfo}>
      <div className={styles.projectHeader}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <TechStack tech={techStack} />
      <div className={styles.buttonWrapper}>
        <ButtonLink url={liveLink} isPrimary>View Live</ButtonLink>
        <ButtonLink url={githubLink}>Github</ButtonLink>
      </div>
    </section>
    <aside className={styles.movWrapper}>
      <GifDisplay mp4={mp4} fakeUrl={fakeUrl} />
    </aside>
  </section>
}
