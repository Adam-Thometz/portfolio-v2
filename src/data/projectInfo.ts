import getTechStack from "@/utils/getTechStack";
import { MainProject } from "./types";

const projects: MainProject[] = [
  {
    name: "AI Assistant @ TARA",
    description: "GPT-powered tools to help teachers create goals, quizzes, and tasks while saving hours of planning time.",
    techStack: getTechStack(["Vue", "Django", "AWS", "Node", "PostgresQL", "Docker"]),
    mp4: "mp4s/ai-assistant.mp4",
    liveLink: new URL("https://www.tarateachers.com/"),
    fakeUrl: "tara.teachers"
  },
  {
    name: "8billionminds",
    description: "Like couch-surfing but for live learning. Learn from and connect with others from around the world.",
    techStack: getTechStack(["Javascript", "CSS", "Java"]),
    mp4: "mp4s/8bm.mp4",
    liveLink: new URL("https://8billionminds.com/"),
    fakeUrl: "8bm.live"
  },
  {
    name: "Vesta Healing",
    description: "A website to advertise the services of a local psychotherapist.",
    techStack: getTechStack(["React", "CSS", "AWS"]),
    mp4: "mp4s/vesta.mp4",
    liveLink: new URL("https://www.vestahealingnyc.org/"),
    fakeUrl: "vesta.healing"
  },
  {
    name: "Art Buddy",
    description: "Arts-based and goal-aligned games and tools for the special education classroom.",
    techStack: getTechStack(["React", "Redux", "CSS", "Jest"]),
    mp4: "mp4s/art-buddy.mp4",
    liveLink: new URL("https://art-buddy.surge.sh/"),
    fakeUrl: "art.buddy"
  },
];

export default projects;
