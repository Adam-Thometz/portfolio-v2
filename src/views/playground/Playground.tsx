import BigBlur from "@/components/background/big-blur/BigBlur";
import styles from "./playground.module.css";
import smallProjects from "@/data/smallProjects";
import SmallProject from "@/components/small-project/SmallProject";
import { PLAYGROUND } from "@/data/constants";

export default function Playground() {
  return <section className={styles.playground} id={PLAYGROUND}>
    <BigBlur />
    <header className={styles.playgroundHeader}>
      <h1>Playground</h1>
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
          gif={project.gif}
          fakeUrl={project.fakeUrl}
        />
      ))}
    </div>
  </section>
}