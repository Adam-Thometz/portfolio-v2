import Image from "next/image";

import styles from "./hero.module.css";

import Blurs from "@/components/background/multiple-blurs/Blurs";
import Arrow from "@/components/arrow/Arrow";
import Circles from "@/components/background/circles/Circles";

import me from "../../../public/images/me.webp";

import { HEADER, PROJECTS } from "@/data/constants";

export default function Hero() {
  return <header className={styles.hero} id={HEADER}>
    <Blurs />
    <Circles />
    <section className={styles.header}>
      <Image src={me} alt='The developer' className={styles.image} />
      <h1>Hello! My name is Adam</h1>
      <p className={styles.text}>I&apos;m a NYC based full-stack software engineer, passionate about music, edtech, and artificial intelligence</p>
      <Arrow id={PROJECTS} />
    </section>
  </header>
}