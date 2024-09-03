import React from "react";

function ProjectItem({ project }) {
  return (
    <article className="project-card">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <img src={project.img} alt={`${project.title}`} className="mb-4" />
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
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        GitHub
      </a>
      <a
        href={project.websiteLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline ml-4"
      >
        Website
      </a>
    </article>
  );
}

export default ProjectItem;
