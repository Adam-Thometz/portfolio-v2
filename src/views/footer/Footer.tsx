import Link from "next/link";

import styles from "./footer.module.css";

import P from "@/components/paragraph/P";

const PORTFOLIO_GITHUB_LINK = "https://github.com/Adam-Thometz/portfolio-v2"

export default function Footer() {
  const VIEW_GITHUB_HERE = <Link
    href={PORTFOLIO_GITHUB_LINK}
    className={styles.textLink}
    target="_blank"
  >View Github here.</Link>

  return <footer className={styles.footer}>
    <P>Made by Adam Thometz ©{new Date().getFullYear()}</P>
    <P>Like this portfolio? {VIEW_GITHUB_HERE}</P>
  </footer>
}