import { StaticImageData } from "next/image";

export type TechStack = {
  name: string,
  icon: StaticImageData
};

export type WorkExperience = {
  name: string,
  description: string,
  techStack: TechStack[],
  liveLink: URL | string,
  fakeUrl: string,
  mp4: string,
  fallback: string,
};

export type PlaygroundProject = {
  name: string,
  description: string,
  techStack: TechStack[],
  liveLink?: URL | string,
  githubLink: URL,
  fakeUrl: string,
  mp4: string,
  fallback: string,
};

export type LinkInfo = {
  name: string,
  icon: StaticImageData,
  url: URL
};
