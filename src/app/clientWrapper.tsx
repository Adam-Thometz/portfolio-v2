"use client"

import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function ClientWrapper({ children }: Props) {
  return children
}