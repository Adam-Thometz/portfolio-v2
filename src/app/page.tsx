import { Suspense } from "react";

import Loader from "@/components/loader/Loader";
import Hero from "@/views/hero/Hero";
import Projects from "@/views/projects/Projects";
import AboutMe from "@/views/about-me/AboutMe";
import Playground from "@/views/playground/Playground";

export default function Home() {
  return (
    <main id='app'>
      <Suspense>
        <Loader />
        <Hero />
        <Projects />
        <AboutMe />
        {/* <Playground /> */}
      </Suspense>
    </main>
  )
}
