"use client"
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const MUSIC_RAINBOW_URL = "https://adam-thometz.github.io/Polyrhythm-Arduino/";
const TONE_JS_CDN = "https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js";

export default function MusicRainbowProject() {
  const appRef = useRef<HTMLDivElement | null>(null);
  const [javascript, setJavascript] = useState<string>("");

  async function getAppCode() {
    const text = await (await fetch(MUSIC_RAINBOW_URL)).text();
    const htmlToDisplay = document.createElement("html");
    htmlToDisplay.innerHTML = text;

    const styleTag: Element = htmlToDisplay.children[0].children[3]; // CSS
    appRef.current?.appendChild(styleTag);

    const bodyEl: Element = htmlToDisplay.children[1];
    const bodyTag = [
      bodyEl.children[0], // instructions
      bodyEl.children[1], // settings
      bodyEl.children[2], // arcs
      bodyEl.children[3], // noteDisplay
    ];
    bodyTag.forEach(tag => appRef.current?.appendChild(tag));

    const script: string = bodyEl.children[1].innerHTML; // My Javascript
    setJavascript(script);
  }

  useEffect(() => {
    try {
      getAppCode();
    } catch (e) {
      console.error("Oh noes", e);
    }
  }, []);
  
  return <main ref={appRef}>
    <Script src={TONE_JS_CDN} />
    {javascript ? <Script id="my-javascript">{javascript}</Script> : null}
  </main>
}
