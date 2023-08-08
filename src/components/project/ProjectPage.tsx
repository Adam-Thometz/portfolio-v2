import styles from './project.module.css'
import { Project } from '@/data/types'
import GifDisplay from '../gif-display/GifDisplay'
import TechStack from '@/components/tech-stack/TechStack'
import ButtonLink from '@/components/button/ButtonLink'
import { PROJECT } from '@/data/constants'

export default function ProjectPage({name, description, techStack, gif, liveLink, githubLink, fakeUrl}: Project) {
  return <section className={styles.project} id={`${PROJECT}-${name.replaceAll(/ /g, '-')}`}>
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
    <aside className={styles.gifWrapper}>
      <GifDisplay gif={gif} fakeUrl={fakeUrl ? fakeUrl : liveLink} />
    </aside>
  </section>
}