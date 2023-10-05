import Image from "next/image";
import Link from "next/link";

import styles from "./aboutMe.module.css";

import Blurs from "@/components/background/multiple-blurs/Blurs";
import Waves from "@/components/background/waves/Waves";
import H1 from "@/components/h1/H1";
import P from "@/components/paragraph/P";

import me from "../../../public/images/me2.webp";

import links from "@/data/contactLinks";
import { ABOUT_ME, PROJECT } from "@/data/constants";

export default function AboutMe() {
  return <section className={styles.aboutMe} id={ABOUT_ME}>
    <Waves />
    <Blurs noOverflow />
    <aside className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={me}
        alt="The developer, with nature in the backgroung, smiling"
      />
    </aside>
    <section className={styles.textWrapper}>
      <H1>About Me</H1>
      <article>
        <P otherClass={styles.text}>Before software, I was a teacher in NYC public schools, mostly teaching music to autistic children. I started learning to code in 2019 and two years later, I was building apps for my music classes (see <Link href={`#${PROJECT}-Art-Buddy`} className={styles.textLink}>Art Buddy</Link>).</P>
        <br />
        <P otherClass={styles.text}>When I&apos;m not coding, I create electronic prog rock as Tesla&apos;s Ghost. I also enjoy cooking, meditating, and working out.</P>
        <br />
        <P>I live in NYC with my fiancee, my cat, and my lizard.</P>
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
