import { StaticImageData } from "next/image";
import Image from "next/image";

import styles from "./gifDisplay.module.css";

type Props = {
  gif: StaticImageData,
  fakeUrl: string | URL
};

export default function GifDisplay({gif, fakeUrl}: Props) {
  const urlDisplay = typeof fakeUrl === "string"
    ? fakeUrl
    : fakeUrl.toString();
  
  return <div className={styles.gifDisplay}>
    <div className={styles.fakeNav}>
      <div className={styles.threeButtons}>
        <div className={styles.smallButton}></div>
        <div className={styles.smallButton}></div>
        <div className={styles.smallButton}></div>
      </div>
      <div className={styles.addressBar}>{urlDisplay}</div>
    </div>
    <Image className={styles.gif} src={gif} alt="" />
  </div>
}