import Link from "next/link";

import styles from "./buttonLink.module.css";

type Props = {
  isPrimary?: boolean,
  url: URL | string,
  children: string,
  long?: boolean
};

export default function ButtonLink({isPrimary, url, children, long}: Props) {
  const buttonStyle = isPrimary ? styles.primary : styles.secondary;
  const longStyle = long ? styles.long : ""
  const className = `${styles.buttonLink} ${buttonStyle} ${longStyle}`;
  return <Link className={className} href={url.toString()} target="_blank">
    {children}
  </Link>
}
