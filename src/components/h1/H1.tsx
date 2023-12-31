import styles from "./h1.module.css"

type Props = {
  children: string
}

export default function H1({ children }: Props) {
  return <h1 className={styles.h1}>{children}</h1>
}
