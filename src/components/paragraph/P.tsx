import { ReactNode } from "react"
import styles from "./p.module.css"

type Props = {
  otherClass?: string,
  children: string | ReactNode
}

export default function P({ otherClass = "", children }: Props) {
  return <p className={`${styles.p} ${otherClass}`}>{children}</p>
}
