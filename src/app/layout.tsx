"use client";

import '../styles/global.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from '@/components/navbar/Navbar'
import Loader from '@/components/loader/Loader'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Loader />
        <Navbar />
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  )
}
