import styles from './hero.module.css'

import Image from "next/image";
import me from '../../../public/images/me.webp';
import Blurs from '@/components/background/multiple-blurs/Blurs';
import { HEADER, PROJECTS } from '@/data/constants';
import Arrow from '@/components/arrow/Arrow';
import Circles from '@/components/background/circles/Circles';

export default function Hero() {
  return <header className={styles.hero} id={HEADER}>
    <Blurs />
    <Circles />
    <section className={styles.header}>
      <Image src={me} alt='The developer' className={styles.image} />
      <h1>Hello! My name is Adam</h1>
      <p className={styles.text}>I&apos;m a NYC based full-stack engineer who specializes in frontend and AI integration</p>
      <Arrow id={PROJECTS} />
    </section>
  </header>
}