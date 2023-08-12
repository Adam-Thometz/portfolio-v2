"use client";
import { useParallax } from "react-scroll-parallax";
import { useRef } from "react";

import Image from "next/image";

import styles from "./circles.module.css";

import circlesImg from "../../../../public/images/circles.svg";

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