import styles from "./work.module.css";

import WorkExperience from "@/components/work-experience/WorkExperience";
import SingleBlur from "@/components/background/single-blur/SingleBlur";

import projects from "@/data/workExperience";
import { WORK } from "@/data/constants";

export default function Work() {
  return <section id={WORK}>
    <SingleBlur />
    <div className={styles.workWrapper}>
    {projects.map((project, i) => (
      <WorkExperience
        key={`project-${i}`}
        name={project.name}
        description={project.description}
        techStack={project.techStack}
        mp4={project.mp4}
        fallback={project.fallback}
        liveLink={project.liveLink}
        fakeUrl={project.fakeUrl}
      />
    ))}
    </div>
  </section>
}
