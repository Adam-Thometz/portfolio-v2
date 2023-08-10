import Image from "next/image"
import waves from "../../../../public/images/waves.svg"

import styles from "./waves.module.css";

export default function Waves() {
  return <div className={styles.wavesWrapper}>
    <Image src={waves} alt="" className={styles.waves} fill={true} />
  </div>
}