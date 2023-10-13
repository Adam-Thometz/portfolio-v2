import { Suspense } from "react";

import BrokenMobile from "@/components/broken-mobile/BrokenMobile";
import Loader from "@/components/loader/Loader";
import Hero from "@/views/hero/Hero";
import Work from "@/views/work/Work";
import AboutMe from "@/views/about-me/AboutMe";
import Playground from "@/views/playground/Playground";

export default function Home() {
  return (
    <main id='app'>
      <Suspense fallback={"Loading..."}>
        <Loader />
        <Hero />
        <Work />
        <AboutMe />
        <Playground />
      </Suspense>
    </main>
  )
}
