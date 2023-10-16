import GITHUB from "../../public/images/link-icons/github.svg";
import LINKEDIN from "../../public/images/link-icons/linkedin.svg";
import YOUTUBE from "../../public/images/link-icons/youtube.svg";
import SOUNDCLOUD from "../../public/images/link-icons/soundcloud.svg";

import { LinkInfo } from "./types";

const links: LinkInfo[] = [
  {
    name: "Github",
    icon: GITHUB,
    url: new URL("https://github.com/Adam-Thometz")
  },
  {
    name: "LinkedIn",
    icon: LINKEDIN,
    url: new URL("https://www.linkedin.com/in/adam-thometz/")
  },
  {
    name: "Youtube",
    icon: YOUTUBE,
    url: new URL("https://www.youtube.com/channel/UCnEEg3thfP-9hXbKPA__58g")
  },
  {
    name: "Soundcloud",
    icon: SOUNDCLOUD,
    url: new URL("https://soundcloud.com/this-is-teslas-ghost")
  },
];

export default links;
