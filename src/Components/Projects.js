import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "MarketPath",
    description:
      "Project developed for AI Launch Lab's R&D program. MarketPath is an AI-powered machine learning model for investment analysis.",
    img: "path/to/ai-web-app-image.jpg", // Replace with the actual path or URL to your image
    tools: ["Streamlit", "Scikit Learn", "Python"],
    githubLink: "https://github.com/bogdanSgithub/MarketPath",
    websiteLink: "https://marketpath.streamlit.app/",
  },
  {
    title: "JACHacks Website",
    description:
      "The official website for JACHacks, established in march 2024. Designed and implemented by students of John Abbott College.",
    img: "path/to/fintech-dashboard-image.jpg", // Replace with the actual path or URL to your image
    tools: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/JACHacks/JACHacks-Website",
    websiteLink: "https://jachacks.pages.dev/",
  },
];

function Projects() {
  return (
    <section className="pt-8 mb-[25vh]">
      <div className="flex flex-row place-items-center m-3 text-[clamp(20px,6vw,35px)]">
        <ProjectItem title="MarketPath" des />
      </div>
    </section>
  );
}

export default Projects;
