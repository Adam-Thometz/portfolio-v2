"use client";

import Image from "next/image";
import Link from "next/link";
import { SyntheticEvent } from "react";

import logo from "../../../public/images/logo.svg";

import styles from "./navbar.module.css";
import ButtonLink from "../button/ButtonLink";

import { HEADER, PROJECTS, ABOUT_ME, RESUME_LINK } from '../../data/constants';

export default function Navbar() {
  const goTo = (e: SyntheticEvent): void => {
    const target = e.target as HTMLElement
    const ids = document.querySelectorAll(`#${target.id}`) as HTMLElement[];
    // debugger
    console.log(target)
    console.log(ids)
    ids[1].scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }
  return <nav className={styles.navbar}>
    <Image
      src={logo}
      alt="Developer logo"
      id={HEADER}
      className={styles.logo}
      onClick={goTo}
    />
    <section>
      <Link
        href="#"
        id={PROJECTS}
        className={styles.navButton}
        onClick={goTo}
      >
        Projects
      </Link>
      <Link
        href="#"
        id={ABOUT_ME}
        className={styles.navButton}
        onClick={goTo}
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