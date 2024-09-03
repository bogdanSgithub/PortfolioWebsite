import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectItem({ project }) {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <aside className="max-md:hidden flex-shrink-0 md:w-1/2 mt-16 mb-8 mr-[4vw]">
        <div className="bg-background opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100 w-full rounded-2xl border border-secondText">
          <img
            src={project.img}
            alt={`${project.title}`}
            className="rounded-2xl"
          />
        </div>
      </aside>
      <article
        className="max-md:bg-secondBackground md:w-1/2 md:text-right max-md:p-12 mt-6 rounded-lg bg-gradient-to-br max-md:from-secondBackground 
                to-background"
      >
        <h2 className="text-3xl text-primary mb-4">{project.title}</h2>
        <p
          className=" text-secondText min-md: rounded-lg bg-gradient-to-br min-md:from-secondBackground 
                to-background pb-4 md:pl-[3vw]"
        >
          {project.description}
        </p>
        <ul className="mb-4 text-secondText">
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="inline-block max-sm:pr-3 md:pl-3 text-[11px]"
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
            className="hover:no-underline hover:text-primary flex items-center md:pr-5"
          >
            <div className="text-4xl max-md:text-3xl">
              <BsGithub />
            </div>
          </a>
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline max-md:pl-4 hover:text-primary h-full flex items-center"
          >
            <div className="text-4xl max-md:text-3xl">
              <FiExternalLink />
            </div>
          </a>
        </div>
      </article>
    </section>
  );
}

export default ProjectItem;
