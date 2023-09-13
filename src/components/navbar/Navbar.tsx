"use client";
import { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

import ButtonLink from "../button/ButtonLink";

import logo from "../../../public/images/logo.svg";
import hamburger from "../../../public/images/hamburger.svg";
import close from "../../../public/images/close.svg";

import { HEADER, ABOUT_ME, RESUME_LINK, PROJECTS } from '../../data/constants';

const OPTIONS: KeyframeAnimationOptions = {
  duration: 600,
  fill: 'forwards',
  easing: "ease-in-out"
}

export default function Navbar() {
  // const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  // const [scrollY, setScrollY] = useState(0)

  // window.addEventListener("scroll", () => {
  //   if (navRef.current) {
  //     if (scrollY < window.scrollY) {
  //       // @ts-ignore
  //       console.log({...navRef.current})
  //       navRef.current.style.transform = "translateY(-10vh)"
  //     } else {
  //       // @ts-ignore
  //       console.log({...navRef.current})
  //       navRef.current.style.transform = "translateY(0)"
  //     }
  //     setScrollY(window.scrollY);
  //   }
  // });

  const openMenu = (): void => {
    // @ts-ignore
    menuRef.current.animate([
      { transform: "translateY(-100%)" },
      { transform: "translateY(0%)" },
    ], OPTIONS);
  }
  const closeMenu = (): void => {
    // @ts-ignore
    menuRef.current.animate([
      { transform: "translateY(0%)" },
      { transform: "translateY(-100%)" },
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
      >
        Resume
      </ButtonLink>
    </section>
  </nav>
}