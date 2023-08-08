import ProjectPage from '@/components/project/ProjectPage'
import styles from "./projects.module.css"
import SingleBlur from '@/components/background-blurs/single-blur/SingleBlur'

import projects from '@/data/projectInfo'
import { PROJECTS } from '@/data/constants'

export default function Projects() {
  return <section className={styles.projects} id={PROJECTS}>
    <SingleBlur />
    <div className={styles.projectWrapper}>
      {projects.map((project, i) => (
        <ProjectPage
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
    </div>
  </section>
}