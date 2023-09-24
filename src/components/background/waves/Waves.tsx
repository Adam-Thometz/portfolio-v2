import Image from "next/image";

import styles from "./waves.module.css";

import waves from "../../../../public/images/waves.png";

export default function Waves() {
  return <div className={styles.wavesWrapper}>
    <Image src={waves} alt="" className={styles.waves} fill={true} />
  </div>
}
