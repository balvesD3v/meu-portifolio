import rocketGamesFile from "../assets/rocketGamesFile.gif";

import { FaReact, FaJsSquare, FaNode, FaCss3 } from "react-icons/fa";

export const skills = [
  {
    id: 1,
    tech: "ReactJs",
    icon: <FaReact />,
  },
  {
    id: 2,
    tech: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    id: 3,
    tech: "NodeJs",
    icon: <FaNode />,
  },
  {
    id: 4,
    tech: "Css3",
    icon: <FaCss3 />,
  },
];

export const projectsDetails = [
  {
    id: 1,
    projectName: "RocketGames",
    projectDesc:
      "RocketGames é um emocionante universo dedicado à paixão pelos jogos e entretenimento digital. Fundado por entusiastas e experts da indústria, nosso objetivo é proporcionar uma experiência única para jogadores e entusiastas de todas as idades.",
    techStacks: ["NodeJs", "React", "SQL"],
    projectImg: rocketGamesFile,
    projectUrl: "https://rocketgames.netlify.app/",
    projectGithub: "https://github.com/BarveraDev/rocket-games-front",
    reverse: false,
  },
];
