import getTechStack from "@/utils/getTechStack";
import { PlaygroundProject } from "./types";

const smallProjects: PlaygroundProject[] = [
  {
    name: "Browser Music Video",
    description: "Making visuals based on my own music! The song is called 'Acceptance Cave.'",
    techStack: getTechStack(["Javascript"]),
    mp4: "mp4s/acceptance-cave.mp4",
    liveLink: "/acceptance-cave",
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "acceptance.cave",
  },
  {
    name: "Music Rainbow",
    description: "This rainbow makes music! I also used an Arduino control pitch",
    techStack: getTechStack(["Javascript", "Node", "C++"]),
    mp4: "mp4s/music-rainbow.mp4",
    liveLink: "/music-rainbow",
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "music.rainbow",
  },
  {
    name: "English To SQL",
    description: "Convert a human query to a SQL one with AI. Live goes to Youtube demo. Take the code and try it on your data",
    techStack: getTechStack(["Python", "Pandas", "SQL"]),
    mp4: "mp4s/nl-to-sql.mp4",
    liveLink: new URL("https://www.youtube.com/watch?v=Z-5s4YT52Cg"),
    githubLink: new URL("https://github.com/Adam-Thometz/Natural-Language-to-SQL"),
    fakeUrl: "human.sql",
  },
  {
    name: "8-Bit Clan",
    description: "Make some 8-bit NFTs! Top 5% in the Mintbean Hiring Hackathon, November 2021",
    techStack: getTechStack(["Node", "Express", "React", "PostgresQL"]),
    mp4: "mp4s/8-bit-clan.mp4",
    liveLink: new URL("https://8-bit-clan.surge.sh/"),
    githubLink: new URL("https://github.com/Adam-Thometz/8-Bit-Clan"),
    fakeUrl: "clan.nft",
  },
];

export default smallProjects;
