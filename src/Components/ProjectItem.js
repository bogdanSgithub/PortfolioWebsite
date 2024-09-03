import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectItem({ project }) {
  return (
    <section className="flex flex-col md:flex-row items-center">
      <aside className="max-md:hidden flex-shrink-0 md:w-1/2">
        <img
          src={project.img}
          alt={`${project.title}`}
          className="w-full h-auto rounded-lg"
        />
      </aside>
      <article className="max-md:bg-secondBackground md:w-1/2 md:text-right max-md:p-12 mt-5">
        <h2 className="text-3xl text-primary mb-4">{project.title}</h2>
        <p className="mb-4 text-secondText">{project.description}</p>
        <ul className="mb-4 text-secondText">
          {project.tools.map((tool, index) => (
            <li key={index} className="inline-block pl-3 py-1 text-sm mb-2">
              {tool}
            </li>
          ))}
        </ul>
        <div className="flex flew-row items-center md:justify-end mb-10">
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
