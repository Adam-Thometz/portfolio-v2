import Link from "next/link";

import styles from "./buttonLink.module.css";

type Props = {
  isPrimary?: boolean,
  url: URL | string,
  children: string,
};

export default function ButtonLink({isPrimary, url, children}: Props) {
  const className = `${styles.buttonLink} ${isPrimary ? styles.primary : styles.secondary}`;
  return <Link className={className} href={url.toString()} target="_blank">
    {children}
  </Link>
}
