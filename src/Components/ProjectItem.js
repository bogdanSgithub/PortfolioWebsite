import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

function ProjectItem({ project }) {
  return (
    <section className="flex flex-col md:flex-row items-center md:space-x-8 p-4">
      <aside className="flex-shrink-0 md:w-1/2">
        <img
          src={project.img}
          alt={`${project.title}`}
          className="w-full h-auto rounded-lg"
        />
      </aside>
      <article className="md:w-1/2">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <ul className="mb-4">
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tool}
            </li>
          ))}
        </ul>
        <div className="flex flew-row items-center mb-10">
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
