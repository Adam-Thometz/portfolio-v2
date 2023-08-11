"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo.svg";
import hamburger from "../../../public/images/hamburger.svg";
import close from "../../../public/images/close.svg";

import styles from "./navbar.module.css";
import ButtonLink from "../button/ButtonLink";
import { useRef } from "react";

import { HEADER, ABOUT_ME, RESUME_LINK, PROJECTS } from '../../data/constants';

const OPTIONS: KeyframeAnimationOptions = {
  duration: 600,
  fill: 'forwards',
  easing: "ease-in-out"
}

export default function Navbar() {
  const menuRef = useRef<HTMLElement>(null);

  const openMenu = (): void => {
    // @ts-ignore
    menuRef.current.animate([
      { transform: "translate(-5vw, -20vh)" },
      { transform: "translate(-5vw, 4.5vh)" },
    ], OPTIONS);
  }
  const closeMenu = (): void => {
    // @ts-ignore
    menuRef.current.animate([
      { transform: "translate(-5vw, 4.5vh)" },
      { transform: "translate(-5vw, -20vh)" },
    ], OPTIONS);
  }

  const goToTop = (): void => document.body.scrollIntoView(true);

  return <nav className={styles.navbar}>
    <Image
      src={logo}
      alt="Developer logo"
      data-id={HEADER}
      className={styles.logo}
      onClick={goToTop}
      onKeyDown={goToTop}
      tabIndex={0}
    />
    <Image src={hamburger} alt="" onClick={openMenu} className={styles.hamburger} />
    <section className={styles.options} ref={menuRef}>
      <Image src={close} alt="close" className={styles.close} onClick={closeMenu} />
      <Link
        href={`#${PROJECTS}`}
        data-id={PROJECTS}
        className={styles.navButton}
      >
        Projects
      </Link>
      <Link
        href={`#${ABOUT_ME}`}
        data-id={ABOUT_ME}
        className={styles.navButton}
      >
        About Me
      </Link>
      <ButtonLink
        isPrimary={true}
        url={RESUME_LINK}
        download
      >
        Resume
      </ButtonLink>
    </section>
  </nav>
}