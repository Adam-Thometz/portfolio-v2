"use client"

import Image from "next/image";
import logo from "../../../public/images/logo.svg"

import styles from "./loader.module.css"
import { useEffect, useState, useRef, MutableRefObject } from "react";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const ref: MutableRefObject<HTMLElement> = useRef(null)
  useEffect(() => {
    if (percent == 100) {
      ref.current.style.transform = "translateY(-100vh)";
    } else {
      const timer = setTimeout(() => {
        setPercent(percent+1);
        clearTimeout(timer);
      }, Math.random() * 75)
    }
  }, [percent]);

  return <div className={styles.loader} ref={ref} >
    <Image src={logo} alt="" className={styles.logo}/>
    <span className={styles.numbers}>{percent}%</span>
  </div>
}