import { BsCodeSlash } from "react-icons/bs";
import ProjectItem from "./ProjectItem";
import jacHacksPic from "../Pictures/jachacks.png";
import marketPathPic from "../Pictures/marketPath.png";
import studyBrewPic from "../Pictures/studyBrew.jpg";
import tabinatorPic from "../Pictures/tabinator.png";

const projects = [
  {
    title: "MyFridge",
    description:
      "Developed for McHacks 12 at McGill University, MyFridge is a winning project among 500 competitors. It helps reduce food waste and improve food inventory management by allowing you to scan your grocery store receipts, provides expiration reminders, and AI-powered recipe suggestions.",
    img: tabinatorPic,
    tools: ["Rust", "Tauri", "Powershell", "Swift", "Python", "React"],
    githubLink: "https://github.com/matthew-hre/HackTheNorth2024",
    websiteLink: "https://devpost.com/software/tabulator",
  },
  {
    title: "Tabinator",
    description:
      "Developed for Hack The North 2024, University of Waterloo, Tabinator is a cross-platform desktop app that saves and restores your desktop layout, including window size, position, and program info.",
    img: tabinatorPic,
    tools: ["Rust", "Tauri", "Powershell", "Swift", "Python", "React"],
    githubLink: "https://github.com/matthew-hre/HackTheNorth2024",
    websiteLink: "https://devpost.com/software/tabulator",
  },
  {
    title: "MarketPath",
    description:
      "Project developed for AI Launch Lab's R&D program. MarketPath is an AI-powered machine learning model for investment analysis. It predicts which S&P 500 stocks will outperform the market, helping investors make data-driven decisions with greater confidence.",
    img: marketPathPic,
    tools: ["Streamlit", "Scikit Learn", "Python"],
    githubLink: "https://github.com/bogdanSgithub/MarketPath",
    websiteLink: "https://marketpath.streamlit.app/",
  },
  {
    title: "JACHacks Website",
    description:
      "The official JACHacks website, launched in March 2024, was created by John Abbott College students. Developed with GitHub for version control, it showcases the collaborative efforts and skills of the team.",
    img: jacHacksPic, // Replace with the actual path or URL to your image
    tools: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JACHacks/JACHacks-Website",
    websiteLink: "https://jachacks.pages.dev/",
  },
  {
    title: "StudyBrew",
    description:
      "Developed for Girls Who Hack, winning 2nd place, StudyBrew is a fullstack web app that provides a Pomodoro timer and live chat for networking in cafes.",
    img: studyBrewPic, // Replace with the actual path or URL to your image
    tools: ["React", "JavaScript", "Firebase"],
    githubLink: "https://github.com/bogdanSgithub",
    websiteLink: "https://devpost.com/software/study-cafe-chat",
  },
];

function Projects() {
  return (
    <section className="pt-8 mb-[20vh]">
      <div className="flex flex-row place-items-center mb-3 text-[clamp(20px,6vw,35px)]">
        <BsCodeSlash className="fill-primary" />
        <h1 className="p-2 ">Projects</h1>
      </div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </section>
  );
}

export default Projects;
