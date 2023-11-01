import { Suspense } from "react";

import Loader from "@/components/loader/Loader";
import Hero from "@/views/hero/Hero";
import Work from "@/views/work/Work";
import AboutMe from "@/views/about-me/AboutMe";
import Playground from "@/views/playground/Playground";
import Footer from "@/views/footer/Footer";

export default function Home() {
  return (
    <main id='app'>
      <Suspense fallback={"Loading..."}>
        <Loader />
        <Hero />
        <Work />
        <AboutMe />
        <Playground />
        <Footer />
      </Suspense>
    </main>
  )
}
