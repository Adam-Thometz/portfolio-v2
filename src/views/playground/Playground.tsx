import styles from "./playground.module.css";

import BigBlur from "@/components/background/big-blur/BigBlur";
import SmallProject from "@/components/small-project/SmallProject";
import H1 from "@/components/h1/H1";
import P from "@/components/paragraph/P";

import smallProjects from "@/data/smallProjects";
import { PLAYGROUND } from "@/data/constants";

type Props = {
  isMobile: boolean
}

export default function Playground({ isMobile }: Props) {  
  return <section className={styles.playground} id={PLAYGROUND}>
    {isMobile ? null : <BigBlur />}
    <header className={styles.playgroundHeader}>
      <H1>Playground</H1>
      <P>You&apos;ve read the resume, now focus on the fun!</P>
    </header>
    <div className={styles.projects}>
      {smallProjects.map(project => (
        <SmallProject
          key={project.name}
          name={project.name}
          description={project.description}
          techStack={project.techStack}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
          mp4={project.mp4}
          fallback={project.fallback}
          fakeUrl={project.fakeUrl}
        />
      ))}
    </div>
  </section>
}
