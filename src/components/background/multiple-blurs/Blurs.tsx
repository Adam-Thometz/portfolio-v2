import styles from './blurs.module.css';

export default function Blurs() {
  return <div className={styles.blurs}>
    <div className={styles.ellipseLeft}></div>
    <div className={styles.ellipseRight}></div>
  </div>
}