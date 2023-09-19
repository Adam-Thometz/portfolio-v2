import getTechStack from "@/utils/getTechStack";
import { Project } from "./types";

import MUSIC_RAINBOW from "../../public/gifs/music-rainbow.gif"

const smallProjects: Project[] = [
  {
    name: "Music Rainbow",
    description: "This rainbow makes music! I also learned Arduino by controlling the pitch",
    techStack: getTechStack(["Javascript", "Node", "C++"]),
    gif: MUSIC_RAINBOW,
    liveLink: "/music-rainbow",
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "music.rainbow"
  },
  // {
  //   name: "English To SQL",
  //   description: "Convert a human query to a computer one with AI. Try it with my database of instruments",
  //   techStack: getTechStack(["Python", "Flask"]),
  //   liveLink: "",
  //   githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
  // },
];

export default smallProjects;