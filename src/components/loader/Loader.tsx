"use client"
import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import styles from "./loader.module.css";

import logo from "../../../public/images/logo.svg";

import { disableScroll, enableScroll } from "@/lib/scroll";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (percent == 100) {
      if (ref.current) ref.current.style.transform = "translateY(-125vh)";
      enableScroll();
    } else {
      const timer = setTimeout(() => {
        setPercent(percent+1);
        clearTimeout(timer);
      }, Math.random() * 60);
    }
  }, [percent]);

  useEffect(() => disableScroll(), [])
  
  return <div className={styles.loader} ref={ref as React.RefObject<HTMLDivElement>}>
    <Image src={logo} alt="" className={styles.logo}/>
    <span className={styles.numbers}>{percent}%</span>
  </div>
}