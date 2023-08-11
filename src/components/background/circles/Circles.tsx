"use client";

import Image from "next/image";
import { useParallax } from "react-scroll-parallax";

import styles from "./circles.module.css";
import circlesImg from "../../../../public/images/circles.svg";
import { useRef } from "react";

export default function Circles() {
  const target = useRef<HTMLElement>(null)
  const circles = useParallax({
    speed: 75,
    // @ts-ignore
    targetElement: target.current,
  })
  // @ts-ignore
  return <div className={styles.circleContainer} ref={target}>
    {/* @ts-ignore */}
    <Image src={circlesImg} alt="" className={styles.circles} ref={circles.ref}/>
  </div>
}