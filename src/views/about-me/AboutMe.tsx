import Image from 'next/image'
import Link from 'next/link';
import me from "../../../public/images/me2.webp"
import links from '@/data/contactLinks';

import styles from './aboutMe.module.css';
import Blurs from '@/components/background-blurs/multiple-blurs/Blurs';
import { ABOUT_ME } from '@/data/constants';

export default function AboutMe() {
  return <section className={styles.aboutMe} id={ABOUT_ME}>
    <Blurs />
    <aside className={styles.imageWrapper}>
      <Image className={styles.image} src={me} alt="The developer, with nature in the backgroung, smiling" />
    </aside>
    <section className={styles.textWrapper}>
      <h1>About Me</h1>
      <article>
        <p>Before software, I worked as a special education teacher in the NYC public school system, mostly teaching music to autistic kids in grades K-5. I got into coding by building apps for my students, which resulted in Art Buddy. From there, the rest is history!</p>
        <br />
        <p>When I&apos;m not coding, I produce music under the name Tesla&apos;s Ghost. I also enjoy cooking, meditating, kung fu, and growing plants. I currently live in the Bronx with my fiancee, my cat, and my blue tongue skink. I also identify as neurodivergent.</p>
      </article>
      <div className={styles.linkWrapper}>
        {links.map(link => (
          <Link key={link.name} href={link.url.toString()} target='_blank'>
            <Image src={link.icon} alt={link.name} className={styles.link} />
          </Link>
        ))}
      </div>
    </section>
  </section>
}