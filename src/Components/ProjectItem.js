function ProjectItem({ title, description, image, tools }) {
  return (
    <section className="py-12">
      <h3>{title}</h3>
      <p>{description}</p>
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder"
        className="w-full h-auto rounded-lg"
      ></img>
      <p>{tools}</p>
    </section>
  );
}

export default ProjectItem;
