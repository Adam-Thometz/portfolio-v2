import styles from "./movDisplay.module.css";

type Props = {
  mp4: string,
  fallback: string,
  fakeUrl: string | URL,
  small?: boolean
};

export default function MovDisplay({mp4, fallback, fakeUrl, small}: Props) {
  const urlDisplay = typeof fakeUrl === "string"
    ? fakeUrl
    : fakeUrl.toString();
  const sizeClass = small ? styles.small : styles.main;

  return <div className={`${styles.movDisplay} ${sizeClass}`}>
    <div className={styles.fakeNav}>
      <div className={styles.threeButtons}>
        <div className={styles.smallButton}></div>
        <div className={styles.smallButton}></div>
        <div className={styles.smallButton}></div>
      </div>
      <div className={styles.addressBar}>{urlDisplay}</div>
    </div>
    <div className={styles.mp4Wrapper}>
      <video src={mp4} poster={fallback} className={styles.mp4} autoPlay loop muted />
    </div>
  </div>
}
