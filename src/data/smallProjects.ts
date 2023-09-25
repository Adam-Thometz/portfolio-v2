import getTechStack from "@/utils/getTechStack";
import { Project } from "./types";

const smallProjects: Project[] = [
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
    name: "Browser Music Video",
    description: "Making visuals based on my own music :D",
    techStack: getTechStack(["Javascript"]),
    mp4: "mp4s/acceptance-cave.mp4",
    liveLink: new URL("https://main.d26vd7jd4udjgm.amplifyapp.com/"),
    githubLink: new URL("https://github.com/Adam-Thometz/Polyrhythm-Arduino"),
    fakeUrl: "acceptance.cave",
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
  {
    name: "This Portfolio",
    description: "Bob's your uncle",
    techStack: getTechStack(["NextJS", "Typescript"]),
    mp4: "mp4s/portfolio.mp4",
    liveLink: new URL("https://www.adamthometz.com/"),
    githubLink: new URL("https://github.com/Adam-Thometz/portfolio-v2"),
    fakeUrl: "adam.thometz",
  },
];

export default smallProjects;
