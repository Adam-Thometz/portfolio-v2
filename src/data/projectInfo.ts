import getTechStack from "@/utils/getTechStack";
import { MainProject } from "./types";

const projects: MainProject[] = [
  {
    name: "Art Buddy",
    description: "Arts-based and goal-aligned games and tools for the special education classroom. Includes 400+ software tests",
    techStack: getTechStack(["React", "Redux", "CSS", "FastAPI", "MongoDB"]),
    mp4: "mp4s/art-buddy.mp4",
    liveLink: new URL("https://art-buddy.surge.sh/"),
    fakeUrl: "art.buddy"
  },
  {
    name: "AI Assistant @ TARA",
    description: "GPT-powered tools that help teachers create goals, quizzes, and tasks. Live goes to login for TARA website.",
    techStack: getTechStack(["Vue", "Django", "AWS", "Node"]),
    mp4: "mp4s/ai-assistant.mp4",
    liveLink: new URL("https://www.tarateachers.com/"),
    fakeUrl: "tara.teachers"
  },
  {
    name: "Vesta Healing",
    description: "A nicely styled landing page to advertise the services of a local psychotherapist.",
    techStack: getTechStack(["React", "CSS", "AWS"]),
    mp4: "mp4s/vesta.mp4",
    liveLink: new URL("https://www.vestahealingnyc.org/"),
    fakeUrl: "vesta.healing"
  },
];

export default projects;
