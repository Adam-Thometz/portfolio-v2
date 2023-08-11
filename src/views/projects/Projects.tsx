import Project from '@/components/project/Project'
import styles from "./projects.module.css"

import projects from '@/data/projectInfo'
import { PROJECTS } from '@/data/constants'
import SingleBlur from '@/components/background/single-blur/SingleBlur'

export default function Projects() {
  return <section className={styles.projects} id={PROJECTS}>
    <SingleBlur />
    {/* <div className={styles.projectWrapper}> */}
    {projects.map((project, i) => (
      <Project
        key={`project-${i}`}
        name={project.name}
        description={project.description}
        techStack={project.techStack}
        gif={project.gif}
        liveLink={project.liveLink}
        githubLink={project.githubLink}
        fakeUrl={project.fakeUrl}
      />
    ))}
    {/* </div> */}
  </section>
}