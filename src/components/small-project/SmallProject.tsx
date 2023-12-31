import styles from "./smallProject.module.css"
import { PlaygroundProject } from "@/data/types";
import TechStack from "../tech-stack/TechStack";
import ButtonLink from "../button/ButtonLink";
import MovDisplay from "../mov-display/MovDisplay";

import H2 from "../h2/H2";
import P from "../paragraph/P";

export default function SmallProject({
  name,
  description,
  techStack,
  mp4,
  fallback,
  liveLink,
  githubLink,
  fakeUrl,
}: PlaygroundProject) {
  return <div className={styles.smallProject}>
    <MovDisplay mp4={mp4} fallback={fallback} fakeUrl={fakeUrl} small />
    <H2>{name}</H2>
    <P>{description}</P>
    <TechStack tech={techStack} />
    <div className={styles.buttonWrapper}>
      {liveLink ? <ButtonLink url={liveLink} isPrimary>View</ButtonLink> : null}
      <ButtonLink url={githubLink}>Code</ButtonLink>
    </div>
  </div>
}
