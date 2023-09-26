"use client";
import { useRef, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import styles from "./navbar.module.css";

import ButtonLink from "../button/ButtonLink";

import logo from "../../../public/images/logo.svg";
import hamburger from "../../../public/images/hamburger.svg";
import close from "../../../public/images/close.svg";

import { HEADER, ABOUT_ME, RESUME_LINK, PROJECTS, PLAYGROUND } from '../../data/constants';

const OPTIONS: KeyframeAnimationOptions = {
  duration: 600,
  fill: 'forwards',
  easing: "ease-in-out"
}

export default function Navbar() {
  const menuRef = useRef<HTMLElement>(null);
  const router: AppRouterInstance = useRouter();
  const pathname = usePathname();

  useEffect(function addIntersectionObserver(): void {
    function onIntersection(entries: IntersectionObserverEntry[]){
      entries.forEach(entry => {
        const id: string = entry.target.id;
        const el = document.querySelector(`[data-id=${entry.target.id}]`) as Element;
        const classToChange = id == HEADER
          ? styles.highlightedLogo
          : styles.highlighted;
        entry.isIntersecting
          ? el.classList.add(classToChange)
          : el.classList.remove(classToChange);
      });
    }
    
    if (document.location.pathname == "/") {
      const observer = new IntersectionObserver(onIntersection, {
        rootMargin: '-50px 0px -85%'
      });
      const ids: string[] = [HEADER, PROJECTS, ABOUT_ME, PLAYGROUND];
      ids.forEach(function attachElToObserver(id) {
        observer.observe(document.getElementById(id) as Element);
      })
    }
  }, []);

  const openMenu = (): void => {
    menuRef.current?.animate([
      { transform: "translateY(-100%)" },
      { transform: "translateY(0%)" },
    ], OPTIONS);
  }
  const closeMenu = (): void => {
    menuRef.current?.animate([
      { transform: "translateY(0%)" },
      { transform: "translateY(-100%)" },
    ], OPTIONS);
  }

  const goHome = (): void => {
    router.push("/");
    document.body.scrollIntoView(true);
  };

  return <nav className={styles.navbar}>
    <Image
      src={logo}
      alt="Developer logo"
      data-id={HEADER}
      className={styles.logo}
      onClick={goHome}
      onKeyDown={goHome}
      tabIndex={0}
    />
    <Image src={hamburger} alt="" onClick={openMenu} className={styles.hamburger} />
    <section className={styles.options} ref={menuRef}>
      <Image src={close} alt="close" className={styles.close} onClick={closeMenu} />
      {pathname == "/" ? <>
        <Link
          href={`/#${PROJECTS}`}
          data-id={PROJECTS}
          className={styles.navButton}
        >
          Projects
        </Link>
        <Link
          href={`/#${ABOUT_ME}`}
          data-id={ABOUT_ME}
          className={styles.navButton}
        >
          About Me
        </Link>
        <Link
          href={`/#${PLAYGROUND}`}
          data-id={PLAYGROUND}
          className={styles.navButton}
        >
          Playground
        </Link>
      </> : null}
      <ButtonLink
        isPrimary={true}
        url={RESUME_LINK}
      >
        Resume
      </ButtonLink>
    </section>
  </nav>
}
