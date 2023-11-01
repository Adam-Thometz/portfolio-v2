"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { useEffect, useState } from "react";

import Script from "next/script";

import "./global.css";

import Navbar from "@/components/navbar/Navbar";
import BrokenMobile from "@/components/broken-mobile/BrokenMobile";

import checkMobile from "@/utils/isMobile";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  
  // @ts-ignore
  useEffect(() => {
    console.log("about to check for mobile")
    // @ts-ignore
    setIsMobile(checkMobile(navigator.userAgent||navigator.vendor||window.opera))
  }, [])

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
        {/* <Navbar />
        <ParallaxProvider>
          {children}
        </ParallaxProvider> */}
        {isMobile
          ? <BrokenMobile />
          : <>
            <Navbar />
            <ParallaxProvider>
              {children}
            </ParallaxProvider>
          </>
        }
      </body>
    </html>
  )
}
