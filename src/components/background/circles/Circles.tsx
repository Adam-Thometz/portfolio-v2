"use client";

import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

import styles from "./circles.module.css";
import circlesImg from "../../../../public/images/circles.svg";
import { MutableRefObject, useRef } from "react";

export default function Circles() {
  const target: MutableRefObject<HTMLElement | null> = useRef(null)
  const circles = useParallax({
    speed: 75,
    targetElement: target.current,
  })
  return <div className={styles.circleContainer} ref={target}>
    <Image src={circlesImg} alt="" className={styles.circles} ref={circles.ref}/>
  </div>
}