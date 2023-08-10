"use client"

import styles from "./singleBlur.module.css"
import { useParallax } from "react-scroll-parallax";
import { MutableRefObject, useRef } from "react";

export default function SingleBlur() {
  // const target: MutableRefObject<HTMLElement | undefined> = useRef(undefined)
  // const blur = useParallax({
  //   speed: -5,
  //   targetElement: target.current,
  // })
  return <div className={styles.blur}></div>

}