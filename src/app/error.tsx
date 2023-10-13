"use client";
import { useEffect } from 'react';

import styles from "./error.module.css";

import H2 from '@/components/h2/H2';
import ButtonLink from '@/components/button/ButtonLink';

type Props = {
  error: Error & { digest?: string }
  // reset?: () => void
}

export default function Error({ error }: Props) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error]);

  return <div className={styles.error}>
    <H2>Something went wrong!</H2>
    <ButtonLink isPrimary url="/">Try again</ButtonLink>
  </div>
}