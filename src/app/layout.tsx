"use client";
import { ParallaxProvider } from "react-scroll-parallax";

import Script from "next/script";

import "../styles/global.css";

import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Adam Thometz</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Portfolio website for software engineer Adam Thometz" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-63BV13DS8Q" />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-63BV13DS8Q');
        `}
      </Script>
      <body>
        <Navbar />
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  )
}
