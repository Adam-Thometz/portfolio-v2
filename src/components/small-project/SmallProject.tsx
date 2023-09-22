import styles from "./smallProject.module.css"
import { Project } from "@/data/types";
import TechStack from "../tech-stack/TechStack";
import ButtonLink from "../button/ButtonLink";
import GifDisplay from "../gif-display/GifDisplay";

export default function SmallProject({name, description, techStack, mp4, liveLink, githubLink, fakeUrl}: Project) {
  return <div className={styles.smallProject}>
    <GifDisplay mp4={mp4} fakeUrl={fakeUrl} small />
    <h2>{name}</h2>
    <p>{description}</p>
    <TechStack tech={techStack} />
    <div className={styles.buttonWrapper}>
      <ButtonLink url={liveLink} isPrimary>View Live</ButtonLink>
      <ButtonLink url={githubLink}>Github</ButtonLink>
    </div>
  </div>
}
