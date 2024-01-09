import getTechStack from "@/utils/getTechStack";
import { PlaygroundProject } from "./types";

const smallProjects: PlaygroundProject[] = [
  // {
  //   name: "Portfolio of Melody Acosta",
  //   description: "I did the frontend and hosting for my wife's UX portfolio",
  //   techStack: getTechStack(["Javascript"]),
  //   mp4: "mp4s/acceptance-cave.mp4",
  //   fallback: "images/fallbacks/acceptance-cave.webp",
  //   liveLink: "/acceptance-cave",
  //   githubLink: new URL("https://github.com/Adam-Thometz/Acceptance-Cave"),
  //   fakeUrl: "acceptance.cave",
  // },
  {
    name: "Browser Music Video",
    description: "Making visuals based on my own music! You can also be a DJ and mute some tracks",
    techStack: getTechStack(["Javascript"]),
    mp4: "mp4s/acceptance-cave.mp4",
    fallback: "images/fallbacks/acceptance-cave.webp",
    liveLink: "/acceptance-cave",
    githubLink: new URL("https://github.com/Adam-Thometz/Acceptance-Cave"),
    fakeUrl: "acceptance.cave",
  },
  {
    name: "Music Rainbow",
    description: "This rainbow makes music! I also experimented with using an Arduino control pitch",
    techStack: getTechStack(["Javascript", "Node", "C++"]),
    mp4: "mp4s/music-rainbow.mp4",
    fallback: "images/fallbacks/music-rainbow.webp",
    liveLink: "/music-rainbow",
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "music.rainbow",
  },
  {
    name: "English To SQL",
    description: "Convert a human query to a SQL one with AI. Take the code and try it on your data",
    techStack: getTechStack(["Python", "Pandas", "SQL"]),
    mp4: "mp4s/nl-to-sql.mp4",
    fallback: "images/fallbacks/nl-to-sql.webp",
    githubLink: new URL("https://github.com/Adam-Thometz/Natural-Language-to-SQL"),
    fakeUrl: "human.sql",
  },
  {
    name: "8-Bit Clan",
    description: "Make some 8-bit NFTs! Top 5% in the Mintbean Hiring Hackathon, November 2021",
    techStack: getTechStack(["Node", "Express", "React", "PostgresQL"]),
    mp4: "mp4s/8-bit-clan.mp4",
    fallback: "images/fallbacks/8-bit-clan.webp",
    liveLink: new URL("https://8-bit-clan.surge.sh/"),
    githubLink: new URL("https://github.com/Adam-Thometz/8-Bit-Clan"),
    fakeUrl: "clan.nft",
  },
  // {
  //   name: "Reptifeed",
  //   description: "My final capstone project from bootcamp. Featuring an API that gets you data about lizard diets.",
  //   techStack: getTechStack(["Node", "Express", "React", "PostgresQL"]),
  //   mp4: "mp4s/8-bit-clan.mp4",
  //   githubLink: new URL("https://github.com/Adam-Thometz/Reptifeed"),
  //   fakeUrl: "reptile.feed",
  // },
  // {
  //   name: "Musophile",
  //   description: "My 1st capstone project from bootcamp. Curate your music and share with other users. Uses the Spotify API.",
  //   techStack: getTechStack(["Flask", "PostgresQL", "jQuery", "CSS"]),
  //   mp4: "mp4s/8-bit-clan.mp4",
  //   githubLink: new URL("https://github.com/Adam-Thometz/Musophile"),
  //   fakeUrl: "music.time",
  // },
];

export default smallProjects;
