import { Project } from "./types";
import getTechStack from "@/lib/getTechStack";

import ART_BUDDY from '../../public/gifs/art-buddy.gif';
import AI_ASSISTANT from '../../public/gifs/ai-assistant.gif';
import VESTA from '../../public/gifs/vesta.gif';
import EIGHT_BIT_CLAN from '../../public/gifs/8-bit-clan.gif';
// import PORTFOLIO from '../../public/gifs/portfolio.gif';

const projects: Project[] = [
  {
    name: "Art Buddy",
    description: "Arts-based and goal-aligned games and tools for the special education classroom.",
    techStack: getTechStack(["Javascript", "React", "Redux", "CSS", "Jest"]),
    gif: ART_BUDDY,
    liveLink: new URL("https://art-buddy.surge.sh/"),
    githubLink: new URL("https://github.com/Adam-Thometz/Art-Buddy"),
    fakeUrl: "art.buddy"
  },
  {
    name: "AI Assistant @ TARA",
    description: "GPT-powered tools that help teachers create goals, quizzes, and tasks. Github goes to NDA-friendly prototype.",
    techStack: getTechStack(["Javascript", "Vue", "CSS", "Python", "Django", "AWS"]),
    gif: AI_ASSISTANT,
    liveLink: new URL("https://youtu.be/Hsfz6F5kQiI"),
    githubLink: new URL("https://github.com/Adam-Thometz/Exam-Generator-Prototype"),
    fakeUrl: "tara.teachers"
  },
  {
    name: "Vesta Healing",
    description: "A nicely styled landing page to advertise the services of a local psychotherapist.",
    techStack: getTechStack(["Javascript", "React", "CSS", "AWS"]),
    gif: VESTA,
    liveLink: new URL("https://www.vestahealingnyc.org/"),
    githubLink: new URL("https://github.com/Adam-Thometz/Vesta-Healing"),
    fakeUrl: "vesta.healing"
  },
  {
    name: "8-Bit Clan",
    description: "An app that makes 8-bit NFTs. Placed in the top 5% in the Mintbean Hiring Hackathon.",
    techStack: getTechStack(["Javascript", "Node", "Express", "React", "PostgresQL"]),
    gif: EIGHT_BIT_CLAN,
    liveLink: new URL("https://8-bit-clan.surge.sh/"),
    githubLink: new URL("https://github.com/Adam-Thometz/8-Bit-Clan"),
    fakeUrl: "8-bit.clan"
  },
  // {
  //   name: "This Portfolio!",
  //   description: "Hopefully this is pretty self-explanatory.",
  //   techStack: getTechStack(["Typescript", "NextJS", "CSS", "AWS"]),
  //   gif: PORTFOLIO,
  //   liveLink: new URL("https://www.adamthometz.com/"),
  //   githubLink: new URL("https://github.com/Adam-Thometz/portfolio-v2"),
  //   fakeUrl: "adam.thometz"
  // },
];

export default projects;