import Image from "next/image";
import Link from "next/link";

import styles from "./brokenMobile.module.css";

import H1 from "../h1/H1"
import P from "../paragraph/P";

import links from "@/data/contactLinks";
import Circles from "../background/circles/Circles";

export default function BrokenMobile() {
  return <div className={styles.brokenMobile}>
    {/* <Circles /> */}
    <H1>This site is currently being optimized for mobile.</H1>
    <P>In the meantime, you can either check it out on desktop or learn more about me through these links:</P>
    <div className={styles.linkWrapper}>
      {links.map(link => (
        <Link key={link.name} href={link.url.toString()} target='_blank'>
          <Image src={link.icon} alt={link.name} className={styles.link} />
        </Link>
      ))}
    </div>
    <P>I apologize for the inconvenience</P>
  </div>
}