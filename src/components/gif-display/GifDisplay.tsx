import styles from "./gifDisplay.module.css";

type Props = {
  mp4: string,
  fakeUrl: string | URL,
  small?: boolean
};

export default function GifDisplay({mp4, fakeUrl, small}: Props) {
  const urlDisplay = typeof fakeUrl === "string"
    ? fakeUrl
    : fakeUrl.toString();

  const smallClass = small ? styles.small : '';
  return <div className={`${styles.gifDisplay} ${smallClass}`}>
    <div className={styles.fakeNav}>
      <div className={styles.threeButtons}>
        <div className={styles.smallButton}></div>
        <div className={styles.smallButton}></div>
        <div className={styles.smallButton}></div>
      </div>
      <div className={styles.addressBar}>{urlDisplay}</div>
    </div>
    <div className={styles.mp4Wrapper}>
      <video src={mp4} className={styles.mp4} autoPlay loop muted />
    </div>
  </div>
}
