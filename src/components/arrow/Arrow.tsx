"use client"

import Image from "next/image";

import styles from "./arrow.module.css";

import arrow from "../../../public/images/arrow.svg";

type Props = {
  id: string
};

export default function Arrow({ id }: Props) {
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