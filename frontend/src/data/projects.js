import CodeRoastAI from "./CodeRoastAI.png";
import communityConnectImage from "./CommunityConnect.png";

const projects = [
  {
    id: 1,
    number: "01",
    name: "CodeRoast AI",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "AI",
    ],

    description:
      "An experimental AI-powered code review project built to explore full-stack development, backend integration, and AI capabilities.",

    liveUrl: "https://code-roast-ai-ruby.vercel.app/",
    githubUrl: "https://github.com/ParthMahajan1020/CodeRoastAI",

    image: CodeRoastAI,

    status: "LIVE",
  },

  {
    id: 2,
    number: "02",
    name: "CommunityConnect",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
    ],

    description:
      "A MERN-based community platform that connects people who need help with those willing to provide it, with dedicated flows for blood donation and local services.",

    liveUrl: "https://community-connect-three-neon.vercel.app/login",
    githubUrl: "https://github.com/ParthMahajan1020/CommunityConnect",

    image: communityConnectImage,

    status: "LIVE",
  },
];

export default projects;