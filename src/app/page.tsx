"use client";
import { Suspense, useState, useEffect } from "react";

import Loader from "@/components/loader/Loader";
import Hero from "@/views/hero/Hero";
import Work from "@/views/work/Work";
import AboutMe from "@/views/about-me/AboutMe";
import Playground from "@/views/playground/Playground";
import Footer from "@/views/footer/Footer";

import checkMobile from "@/utils/isMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // @ts-ignore
    setIsMobile(checkMobile(navigator.userAgent||navigator.vendor||window.opera))
  }, [])

  return (
    <main id='app'>
      <Suspense fallback={"Loading..."}>
        <Loader />
        <Hero isMobile={isMobile} />
        <Work isMobile={isMobile} />
        <AboutMe isMobile={isMobile} />
        <Playground isMobile={isMobile} />
        {isMobile && <Footer />}
      </Suspense>
    </main>
  )
}
