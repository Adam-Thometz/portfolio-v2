import styles from "./h2.module.css"

type Props = {
  children: string
}

export default function H2({ children }: Props) {
  return <h2 className={styles.h2}>{children}</h2>
}
