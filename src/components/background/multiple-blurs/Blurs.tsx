"use client"

import styles from './blurs.module.css';

type Props = {
  heightStyle?: string
}

export default function Blurs({ heightStyle }: Props) {
  const height = heightStyle ? heightStyle : "150vh"
  return <div className={styles.blurs} style={{height}}>
    <div className={styles.ellipseLeft}></div>
    <div className={styles.ellipseRight}></div>
  </div>
}