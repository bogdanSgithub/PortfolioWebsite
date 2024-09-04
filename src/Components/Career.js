import { BsFileTextFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const experiences = [
  {
    title: "IT Technician/Wharehouse Clerk",
    company: "Revenue Quebéc",
    tasks: [
      "Conducted daily warehouse operations, involving inventory management, organization, and ensuring efficient workflows for our IT team.",
      "          Installed and configured new devices and system components.",
      "Maintained accurate inventory records using in-house applications for IT equipment.",
    ],
  },
];

function ExperienceItem({ experience }) {
  return (
    <section
      className="border-l-2 border-primary bg-gradient-to-bl from-secondBackground 
          to-background p-8 rounded-lg"
    >
      <h4 className="text-3xl pb-4">
        {experience.title}
        <span className="text-primary"> @{experience.company}</span>
      </h4>
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
      {experiences.map((experience, index) => (
        <ExperienceItem key={index} experience={experience} />
      ))}
      <div className="border-l-2 border-secondText pl-4 mt-[4vh]">
        <h3 className="text-4xl pb-4">Education</h3>
        <h4 className="text-secondText">
          Computer Science
          <span className="text-primary"> @John Abbott College</span>
        </h4>
      </div>
    </section>
  );
}

export default Career;
