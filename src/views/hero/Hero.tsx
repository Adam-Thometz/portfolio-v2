import styles from './hero.module.css'

import Image from "next/image";
import me from '../../../public/images/me.png';
import Blurs from '@/components/background-blurs/multiple-blurs/Blurs';
import { HEADER, PROJECT } from '@/data/constants';
import DownArrow from '@/components/down-arrow/DownArrow';

export default function Hero() {
  return <header className={styles.hero} id={HEADER}>
    <Blurs />
    <section className={styles.header}>
      <Image src={me} alt='The developer' className={styles.image} />
      <h1>Hello! My name is Adam</h1>
      <p className={styles.text}>I&apos;m a NYC based full-stack engineer who specializes in frontend and AI integration</p>
      <DownArrow id={PROJECT} />
    </section>
  </header>
}