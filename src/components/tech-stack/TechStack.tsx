import Image from "next/image";

import styles from "./techStack.module.css";

import { TechStack } from "@/data/types";

type Props = {
  tech: TechStack[]
};

export default function TechStack({tech}: Props) {
  return <div className={styles.techStack}>
    {tech.map((t: TechStack) => (
      <figure key={t.name} className={styles.techStackCard}>
        <Image src={t.icon} alt="" className={styles.icon} />
        <figcaption className={styles.caption}>{t.name}</figcaption>
      </figure>
    ))}
  </div>
}
