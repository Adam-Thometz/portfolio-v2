import styles from './hero.module.css'

import Image from "next/image";
import waves from '../../../public/images/waves.svg';
import me from '../../../public/images/me.png';
import arrow from '../../../public/images/arrow.svg'
import Blurs from '@/components/background-blurs/multiple-blurs/Blurs';
import { HEADER } from '@/data/constants';
import readyScroll from '@/lib/readyScroll';

export default function Hero() {
  return <header className={styles.hero} id={HEADER}>
    <Blurs />
    <section className={styles.header}>
      <Image src={me} alt='The developer' className={styles.image} />
      <h1>Hello! My name is Adam</h1>
      <p className={styles.text}>I&apos;m a NYC based full-stack engineer who specializes in frontend and AI integration</p>
      <Image src={arrow} alt="" className={styles.arrow} />
    </section>
  </header>
}