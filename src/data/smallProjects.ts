import getTechStack from "@/utils/getTechStack";
import { Project } from "./types";

import MUSIC_RAINBOW from "../../public/gifs/music-rainbow.gif";
import EIGHT_BIT_CLAN from '../../public/gifs/8-bit-clan.gif';
import ACCEPTANCE_CAVE from "../../public/gifs/acceptance-cave.gif"

const smallProjects: Project[] = [
  {
    name: "Music Rainbow",
    description: "This rainbow makes music! I also used an Arduino control pitch",
    techStack: getTechStack(["Javascript", "Node", "C++"]),
    gif: MUSIC_RAINBOW,
    liveLink: "/music-rainbow",
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "music.rainbow"
  },
  {
    name: "Browser Music Video",
    description: "Making visuals based on my own music :D",
    techStack: getTechStack(["Javascript"]),
    gif: ACCEPTANCE_CAVE,
    liveLink: new URL("https://main.d26vd7jd4udjgm.amplifyapp.com/"),
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "acceptance.cave"
  },
  // {
  //   name: "Natural Language To SQL",
  //   description: "Convert a human query to a computer one with AI.",
  //   techStack: getTechStack(["Python", "Flask"]),
  //   gif: MUSIC_RAINBOW,
  //   liveLink: "",
  //   githubLink: new URL("https://github.com/Adam-Thometz/Natural-Language-to-SQL"),
  //   fakeUrl: "sql.english",
  // },
  {
    name: "8-Bit Clan",
    description: "An app that makes 8-bit NFTs. Placed in the top 5% in the Mintbean Hiring Hackathon.",
    techStack: getTechStack(["Node", "Express", "React", "PostgresQL"]),
    gif: EIGHT_BIT_CLAN,
    liveLink: new URL("https://8-bit-clan.surge.sh/"),
    githubLink: new URL("https://github.com/Adam-Thometz/8-Bit-Clan"),
    fakeUrl: "8-bit.clan"
  },
];

export default smallProjects;