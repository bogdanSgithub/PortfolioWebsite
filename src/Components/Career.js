import { BsFileTextFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

function Career() {
  return (
    <section className="pt-8 mb-[15vh]">
      <div className="flex flex-row place-items-center mb-3 text-[clamp(20px,6vw,35px)]">
        <BsFileTextFill className="fill-primary" />
        <h1 className="p-2 ">Career</h1>
      </div>
      <div className="border-l-2 border-secondText pl-4 mt-[4vh]">
        <h3 className="text-4xl pb-4">Education</h3>
        <h4 className="text-secondText">
          Computer Science
          <span className="text-primary"> @John Abbott College</span>
        </h4>
      </div>

      <div className="mt-[4vh]">
        <h3 className="text-4xl pb-4">Experience</h3>
        <div className="border-l-2 border-primary pl-4">
          <h4 className="text-2xl">
            IT Technician/Warehouse Clerk
            <span className="text-primary"> @Revenue Québec</span>
          </h4>
          <ul className="text-secondText mt-2 pl-4">
            <li className="flex items-start">
              <FiArrowRight className="text-primary mt-1 mr-2" />
              Conducted daily warehouse operations, involving inventory
              management, organization, and ensuring efficient workflows for our
              IT team.
            </li>
            <li className="flex items-start">
              <FiArrowRight className="text-primary mt-1 mr-2" />
              Installed and configured new devices and system components.
            </li>
            <li className="flex items-start">
              <FiArrowRight className="text-primary mt-1 mr-2" />
              Maintained accurate inventory records using in-house applications
              for IT equipment.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Career;
