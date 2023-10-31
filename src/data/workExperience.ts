import getTechStack from "@/utils/getTechStack";
import { WorkExperience } from "./types";

const projects: WorkExperience[] = [
  {
    name: "Art Buddy - Frontend",
    description: "Arts-based and goal-aligned games and tools for the special education classroom.",
    techStack: getTechStack(["React", "Redux", "CSS", "Jest"]),
    mp4: "mp4s/art-buddy.mp4",
    fallback: "images/fallbacks/art-buddy.webp",
    liveLink: new URL("https://art-buddy.surge.sh/"),
    fakeUrl: "art.buddy"
  },
  {
    name: "TARA - AI Assistant",
    description: "GPT-powered tools to help teachers create goals, quizzes, and tasks while saving hours of planning time.",
    techStack: getTechStack(["Vue", "Django", "AWS", "Node"]),
    mp4: "mp4s/ai-assistant.mp4",
    fallback: "images/fallbacks/ai-assistant.webp",
    liveLink: new URL("https://www.tarateachers.com/"),
    fakeUrl: "tara.teachers"
  },
  {
    name: "Clarity - Frontend",
    description: "A website to advertise the services of a local psychotherapist.",
    techStack: getTechStack(["React", "CSS", "AWS"]),
    mp4: "mp4s/clarity.mp4",
    fallback: "images/fallbacks/vesta.webp",
    liveLink: new URL("https://www.claritypsychotherapycounseling.com/"),
    fakeUrl: "clarity.healing"
  },
];

export default projects;
