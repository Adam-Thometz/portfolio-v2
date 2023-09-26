import styles from "./projects.module.css";

import Project from "@/components/project/Project";
import SingleBlur from "@/components/background/single-blur/SingleBlur";

import projects from "@/data/projectInfo";
import { PROJECTS } from "@/data/constants";

export default function Projects() {
  return <section className={styles.projects} id={PROJECTS}>
    <SingleBlur />
    <div className={styles.projectWrapper}>
    {projects.map((project, i) => (
      <Project
        key={`project-${i}`}
        name={project.name}
        description={project.description}
        techStack={project.techStack}
        mp4={project.mp4}
        liveLink={project.liveLink}
        fakeUrl={project.fakeUrl}
      />
    ))}
    </div>
  </section>
}
