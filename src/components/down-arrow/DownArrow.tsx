"use client"
import Image from "next/image";
import arrow from "../../../public/images/arrow.svg";
import styles from "./downArrow.module.css";

type Props = {
  id: string
};

export default function DownArrow({ id }: Props) {
  const scrollDown = () => {
    const goTo = document.getElementById(id);
    goTo?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  return <Image
    src={arrow}
    alt=""
    className={styles.arrow}
    onClick={scrollDown}
  />
}