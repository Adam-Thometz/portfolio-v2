import styles from './blurs.module.css';

type Props = {
  noOverflow?: boolean
};

export default function Blurs({ noOverflow }: Props) {
  const style = noOverflow ? { height: "100vh" } : {}
  return <div className={styles.blurs} style={style}>
    <div className={styles.ellipseLeft}></div>
    <div className={styles.ellipseRight}></div>
  </div>
}
