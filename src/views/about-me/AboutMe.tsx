import Image from "next/image";
import Link from "next/link";

import styles from "./aboutMe.module.css";

import Waves from "@/components/background/waves/Waves";

import me from "../../../public/images/me2.webp";

import links from "@/data/contactLinks";
import { ABOUT_ME, PROJECT } from "@/data/constants";

export default function AboutMe() {
  return <section className={styles.aboutMe} id={ABOUT_ME}>
    <Waves />
    <aside className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={me}
        alt="The developer, with nature in the backgroung, smiling"
      />
    </aside>
    <section className={styles.textWrapper}>
      <h1>About Me</h1>
      <article>
        <p className={styles.text}>Before software, I was a teacher in the NYC public school system, mostly teaching music to autistic kids. I got into coding during the pandemic and by 2021, I was building apps for my classes (see <Link href={`#${PROJECT}-Art-Buddy`} className={styles.textLink}>Art Buddy</Link>).</p>
        <br />
        <p className={styles.text}>When I&apos;m not coding, I create electronic prog rock-like music as Tesla&apos;s Ghost. I also enjoy cooking, meditating, kung fu, and learning Spanish and Arabic. I live in the Bronx with my fiancee, my cat, and my blue tongue skink. I am also neurodivergent.</p>
      </article>
      <div className={styles.linkWrapper}>
        {links.map(link => (
          <Link key={link.name} href={link.url.toString()} target='_blank'>
            <Image src={link.icon} alt={link.name} className={styles.link} objectFit="cover" />
          </Link>
        ))}
      </div>
    </section>
  </section>
}