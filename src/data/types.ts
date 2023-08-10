import { StaticImageData } from "next/image";

export type TechStack = {
  name: string,
  icon: StaticImageData
};

export type Project = {
  name: string,
  description: string,
  techStack: TechStack[],
  liveLink: URL,
  githubLink: URL,
  fakeUrl?: string,
  gif: StaticImageData,
};

export type LinkInfo = {
  name: string,
  icon: StaticImageData,
  url: URL
};