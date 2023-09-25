"use client"
import Script from "next/script";
import { VT323 } from "@next/font/google";
import { useEffect, useRef, useState } from "react";

const MUSIC_VIDEO_URL = "https://for-host.d1vtkh1zhxl49o.amplifyapp.com/";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"]
})

export default function MusicRainbowProject() {
  const appRef = useRef<HTMLDivElement | null>(null);
  const [javascript, setJavascript] = useState<string>("");

  async function getAppCode() {
    const text = await (await fetch(MUSIC_VIDEO_URL)).text();

    const htmlToDisplay = document.createElement("html");
    htmlToDisplay.innerHTML = text;

    const styleTag: Element = htmlToDisplay.children[0].children[7]; // CSS
    appRef.current?.appendChild(styleTag);

    const bodyEl: Element = htmlToDisplay.children[1].children[0]; // HTML
    appRef.current?.appendChild(bodyEl)

    const script: string = htmlToDisplay.children[1].textContent as string; // Javascript
    setJavascript(script);
  }

  useEffect(() => {
    try {
      getAppCode();
    } catch (e) {
      console.error("Oh noes", e);
    }
  }, []);
  
  return <main ref={appRef} className={vt323.className}>
    {javascript ? <Script id="my-javascript">{javascript}</Script> : null}
  </main>
}
