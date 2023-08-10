"use client";

import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent } from "react";

import logo from "../../../public/images/logo.svg";
import hamburger from "../../../public/images/hamburger.svg";
import close from "../../../public/images/close.svg";

import styles from "./navbar.module.css";
import ButtonLink from "../button/ButtonLink";
import { useRef } from "react";

import { HEADER, ABOUT_ME, RESUME_LINK, PROJECTS } from '../../data/constants';

export default function Navbar() {
  const menuRef = useRef<HTMLElement>(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.animate([
        { transform: "translate(-5vw, -20vh)" },
        { transform: "translate(-5vw, 4.5vh)" },
      ], {
        duration: 300,
        fill: 'forwards'
      });
    }
  }
  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.animate([
        { transform: "translate(-5vw, 4.5vh)" },
        { transform: "translate(-5vw, -20vh)" },
      ], {
        duration: 300,
        fill: 'forwards'
      });
    }
  }

  const goToTop = (): void => {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  return <nav className={styles.navbar}>
    <Image
      src={logo}
      alt="Developer logo"
      data-id={HEADER}
      className={styles.logo}
      onClick={goToTop}
      onKeyDown   ={goToTop}
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