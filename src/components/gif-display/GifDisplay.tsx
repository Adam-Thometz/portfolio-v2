import { StaticImageData } from "next/image";
import Image from "next/image";

import styles from "./gifDisplay.module.css";

type Props = {
  gif: StaticImageData,
  fakeUrl: string | URL,
  small?: boolean
};

export default function GifDisplay({gif, fakeUrl, small}: Props) {
  const urlDisplay = typeof fakeUrl === "string"
    ? fakeUrl
    : fakeUrl.toString();

  const smallStyle = small ? {
    transform: "rotate(0) skew(0,0) translateX(0)",
    height: "40vh"
  } : {}
  
  return <div className={styles.gifDisplay} style={smallStyle}>
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