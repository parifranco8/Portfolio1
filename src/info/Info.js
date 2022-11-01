import self from "../img/selfie.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Franco",
  lastName: "Pari",
  initials: "fp",
  position: "an aspiring Front End Software Engineer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🌀",
      text: "Avid learner and consumer of knowledge",
    },
    {
      emoji: "👨‍💻",
      text: "I prototype and build applications",
    },
    {
      emoji: "🌎",
      text: " Based in the US",
    },
    {
      emoji: "📧",
      text: "francopr10@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/parifranco8",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/franco-pari-sejas/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "I am a Web Developer and recent graduate from George Mason University with a Bachelor's Degree in Information Technology. I am always curious to learning new things and constantly exploring new areas of work. I am also able to leverage my existing skills and expertise to solve challenging problems. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "node.js",
      "mySQL",
      "express.js",
      "postgresSQL",
      "figma",
    ],
    exposedTo: ["graphQL", "typescript", "jest", "firebase"],
  },
  hobbies: [
    {
      label: "soccer",
      emoji: "⚽",
    },
    {
      label: "gym",
      emoji: "🏋️‍♂️",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "hanging with friends",
      emoji: "😎",
    },
    {
      label: "travel",
      emoji: "✈️",
    },
    {
      label: "nature",
      emoji: "🌳",
    },
  ],
  portfolio: [
    {
      title: "E-Commerce Clothing Store",
      live: "https://sprightly-monstera-e2fea5.netlify.app/",
      source: "https://github.com/parifranco8/e-commerce",
      image: mock1,
    },
    {
      title: "Facial Recognition App",
      live: "https://front-end-1.herokuapp.com/",
      source: "https://github.com/parifranco8/front-end",
      image: mock2,
    },
    {
      title: "Music Player",
      live: "https://parifranco8.github.io/music-player/",
      source: "https://github.com/parifranco8/music-player",
      image: mock3,
    },
    {
      title: "Calculator",
      live: "https://parifranco8.github.io/calculator/",
      source: "https://github.com/parifranco8/calculator",
      image: mock4,
    },
    {
      title: "Pong",
      live: "https://parifranco8.github.io/pong/",
      source: "https://github.com/parifranco8/pong",
      image: mock5,
    },
  ],
};
