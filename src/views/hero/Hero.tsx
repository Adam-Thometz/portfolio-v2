import Image from "next/image";

import styles from "./hero.module.css";

import Blurs from "@/components/background/multiple-blurs/Blurs";
import Arrow from "@/components/arrow/Arrow";
import Circles from "@/components/background/circles/Circles";
import H1 from "@/components/h1/H1";
import P from "@/components/paragraph/P";

import me from "../../../public/images/me.webp";

import { HEADER, WORK } from "@/data/constants";

export default function Hero() {
  return <header className={styles.hero} id={HEADER}>
    <Blurs />
    <Circles />
    <section className={styles.header}>
      <Image src={me} alt='The developer' className={styles.image} />
      <H1>Hello! My name is Adam</H1>
      <P otherClass={styles.text}>NYC-based software engineer, specializing in frontend and AI</P>
      <Arrow id={WORK} />
    </section>
  </header>
}
