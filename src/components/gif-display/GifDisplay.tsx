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
    <div className={styles.mp4Wrapper}>
      <video src={mp4} className={styles.mp4} autoPlay loop muted />
    </div>
  </div>
}