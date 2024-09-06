import { BsFileTextFill } from "react-icons/bs";

const experiences = [
  {
    title: "IT Technician/Wharehouse Clerk",
    company: "Revenu Quebéc",
    tasks: [
      "Conducted daily warehouse operations, involving inventory management, organization, and ensuring efficient workflows for our IT team.",
      "          Installed and configured new devices and system components.",
      "Maintained accurate inventory records using in-house applications for IT equipment.",
    ],
    timeframe: "July 2024 - Present",
  },
  {
    title: "Director Of Technology, JACHacks",
    company: "John Abbott College",
    tasks: [
      "Collaborated with a dedicated team of John Abbott College students to successfully organize and launch our college’s first Hackathon.",
      "Designed and developed the event website, ensuring user-friendly navigation and functionality. jachacks.pages.dev/",
      "Managed AV equipment, including projectors, speakers, and microphones, to ensure seamless presentations and announcements.",
    ],
    timeframe: "March 2024 - June 2024",
  },
];

const education = {
  title: "Computer Science",
  company: "John Abbott College",
  tasks: ["4.0 GPA", "3x Dean's List", "$1500 semesterly awarded scholarship"],
  timeframe: "August 2023 - May 2026",
};

function ExperienceItem({ experience }) {
  return (
    <section
      className="border-l-2 border-primary bg-gradient-to-bl from-secondBackground 
          to-background p-8 rounded-lg mb-[4vh]"
    >
      <h4 className="text-3xl pb-3">
        {experience.title}
        <span className="text-primary"> @{experience.company}</span>
      </h4>
      <p className="pb-3 text-secondText">{experience.timeframe}</p>
      <ul className="text-secondText mt-2 pl-4">
        {experience.tasks.map((task, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary pr-2">▹</span>
            {task}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Career() {
  return (
    <section className="pt-8 mb-[15vh]">
      <div className="flex flex-row place-items-center mb-[5vh] text-[clamp(20px,6vw,35px)]">
        <BsFileTextFill className="fill-primary" />
        <h1 className="p-2 ">Career</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start md:space-x-8 pt-6">
        <div className="md:max-w-[60%]">
          <h3 className="text-4xl pb-[4vh]">Experience</h3>
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} />
          ))}
        </div>
        <div className="max-md:mt-[5vh]">
          <h3 className="text-4xl pb-[4vh]">Education</h3>
          <ExperienceItem experience={education} />
        </div>
      </div>
    </section>
  );
}

export default Career;
