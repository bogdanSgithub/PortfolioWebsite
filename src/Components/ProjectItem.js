import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectItem({ project }) {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <aside className="max-md:hidden flex-shrink-0 md:w-1/2 mt-8 mb-8">
        <div className="bg-primary opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100 w-[90%] rounded-[12px] ">
          <img
            src={project.img}
            alt={`${project.title}`}
            className="rounded-[12px] "
          />
        </div>
      </aside>
      <article
        className="max-md:bg-secondBackground md:w-1/2 md:text-right max-md:p-12 mt-6 rounded bg-gradient-to-br max-md:from-secondBackground 
                to-background"
      >
        <h2 className="text-3xl text-primary mb-4">{project.title}</h2>
        <p
          className="mb-3 text-secondText min-md: bg-secondBackground rounded bg-gradient-to-br min-md:from-secondBackground 
                to-background p-4"
        >
          {project.description}
        </p>
        <ul className="mb-3 text-secondText">
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="inline-block max-sm:pr-3 min-md:pl-3 text-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
        <div className="flex flew-row items-center md:justify-end">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline p-2 hover:text-primary flex items-center"
          >
            <div className="text-3xl">
              <BsGithub />
            </div>
          </a>
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline p-2 hover:text-primary h-full flex items-center"
          >
            <div className="text-3xl">
              <FiExternalLink />
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}

export default ProjectItem;
