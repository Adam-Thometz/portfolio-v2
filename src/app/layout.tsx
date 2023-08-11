"use client";

import '../styles/global.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/components/navbar/Navbar'
import Loader from '@/components/loader/Loader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Adam Thometz</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Portfolio website for software engineer Adam Thometz" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {/* <Loader /> */}
        <Navbar />
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  )
}
