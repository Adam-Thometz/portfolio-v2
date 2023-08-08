import { Suspense } from 'react'

import Navbar from '@/components/navbar/Navbar'
import Loader from '@/components/loader/Loader'
import Hero from '@/views/hero/Hero'
import Projects from '@/views/projects/Projects'
import AboutMe from '@/views/about-me/AboutMe'

// const getData = async () => {
//   const data = await fetch("https://www.reddit.com/.json");
//   return data.json();
// }

export default async function Home() {
  // const data = await getData();
  // const post = data.data.children[0].data.title
  return (
    <main id='app'>
      <Suspense>
        <Loader />
        <Navbar />
        <Hero />
        <Projects />
        <AboutMe />
      </Suspense>
    </main>
  )
}
