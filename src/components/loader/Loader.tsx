"use client"
import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import styles from "./loader.module.css";

import logo from "../../../public/images/logo.svg";

import { disableScroll, enableScroll } from "@/utils/scroll";
import useVisited from "@/utils/useVisited";

export default function Loader() {
  const [percent, setPercent] = useState(0);
  const [visited, setVisited] = useVisited()
  const ref = useRef<HTMLElement | null>(null);

  const moveUp = () => {
    if (ref.current) ref.current.style.transform = "translateY(-125vh)";
    enableScroll();
  }

  useEffect(() => {
    if (!visited) {
      if (percent == 100) {
        setVisited(true);
        moveUp();
      } else {
        const timer = setTimeout(() => {
          setPercent(percent+1);
          clearTimeout(timer);
        }, Math.random() * 60);
      }
    } else {
      setPercent(100);
      moveUp();
    }
  }, [percent, visited, setVisited]);

  useEffect(() => disableScroll(), []);
  
  // @ts-ignore
  return <div className={styles.loader} ref={ref} suppressHydrationWarning>
    <Image src={logo} alt="" className={styles.logo}/>
    <span className={styles.numbers}>{percent}%</span>
  </div>
}