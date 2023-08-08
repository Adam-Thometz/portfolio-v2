import Image from "next/image";
import logo from "../../../public/images/logo.svg"

import styles from "./loader.module.css"

export default function Loader() {
  return <div className={styles.loader}>
    <Image src={logo} alt="" className={styles.logo} />
    <span className={styles.numbers}>98%</span>
  </div>
}