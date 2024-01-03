import styles from "./workExperience.module.css";

import SingleBlur from "../background/single-blur/SingleBlur";
import MovDisplay from "../mov-display/MovDisplay";
import TechStack from "../tech-stack/TechStack";
import ButtonLink from "../button/ButtonLink";
import H2 from "../h2/H2";
import P from "../paragraph/P";

import { EXPERIENCE } from "@/data/constants";
import { WorkExperience } from "@/data/types";

export default function WorkExperience({
  description,
  fakeUrl,
  mp4,
  fallback,
  liveLink,
  name,
  techStack,
}: WorkExperience) {
  const formattedName = name.replaceAll(/ /g, '-');
  return <section className={styles.experience} id={`${EXPERIENCE}-${formattedName}`}>
    <SingleBlur />
    <section className={styles.experienceInfo}>
      <div className={styles.experienceHeader}>
        <H2>{name}</H2>
        <P>{description}</P>
      </div>
      <TechStack tech={techStack} />
      <ButtonLink url={liveLink} isPrimary long>View Site</ButtonLink>
    </section>
    <MovDisplay mp4={mp4} fallback={fallback} fakeUrl={fakeUrl} />
  </section>
}
