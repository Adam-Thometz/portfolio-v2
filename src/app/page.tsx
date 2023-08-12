import { Suspense } from "react";

import Hero from "@/views/hero/Hero";
import Projects from "@/views/projects/Projects";
import AboutMe from "@/views/about-me/AboutMe";

export default async function Home() {
  return (
    <main id='app'>
      <Suspense>
        <Hero />
        <Projects />
        <AboutMe />
      </Suspense>
    </main>
  )
}
