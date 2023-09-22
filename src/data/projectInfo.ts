import getTechStack from "@/utils/getTechStack";
import { Project } from "./types";

const projects: Project[] = [
  {
    name: "Art Buddy",
    description: "Arts-based and goal-aligned games and tools for the special education classroom. Includes 400+ software tests",
    techStack: getTechStack(["Javascript", "React", "Redux", "CSS", "Jest"]),
    mp4: "mp4s/art-buddy.mp4",
    liveLink: new URL("https://art-buddy.surge.sh/"),
    githubLink: new URL("https://github.com/Adam-Thometz/Art-Buddy"),
    fakeUrl: "art.buddy"
  },
  {
    name: "AI Assistant @ TARA",
    description: "GPT-powered tools that help teachers create goals, quizzes, and tasks. Github goes to NDA-friendly prototype.",
    techStack: getTechStack(["Javascript", "Vue", "CSS", "Python", "Django", "AWS", "Node"]),
    mp4: "mp4s/ai-assistant.mp4",
    liveLink: new URL("https://youtu.be/Hsfz6F5kQiI"),
    githubLink: new URL("https://github.com/Adam-Thometz/Exam-Generator-Prototype"),
    fakeUrl: "tara.teachers"
  },
  {
    name: "Vesta Healing",
    description: "A nicely styled landing page to advertise the services of a local psychotherapist.",
    techStack: getTechStack(["Javascript", "React", "CSS", "AWS"]),
    mp4: "mp4s/vesta.mp4",
    liveLink: new URL("https://www.vestahealingnyc.org/"),
    githubLink: new URL("https://github.com/Adam-Thometz/Vesta-Healing"),
    fakeUrl: "vesta.healing"
  },
];

export default projects;
