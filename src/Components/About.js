import { BsFillPersonFill } from "react-icons/bs";

function About() {
  return (
    <section className="pt-8 mb-[25vh]">
      <div className="flex flex-row place-items-center m-3 text-[clamp(20px,6vw,35px)]">
        <BsFillPersonFill className="fill-primary" />
        <h1 className="p-2 ">About</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:space-x-8 p-4">
        <article className="md:w-1/2">
          <p className="text-secondText text-[clamp(13px,5vw,17px)] max-w-[580px] mb-8">
            Hello! I’m Bogdan Feher, a passionate developer with a deep love for
            coding and technology. In my second year at John Abbott College, I’m
            actively engaged in software development and learning new
            technologies. At the moment, I’m particularly excited about
            <span className="text-primary"> AI/ML</span> and
            <span className="text-primary"> Web Development</span>.
          </p>
          <p className="text-secondText text-[clamp(13px,5vw,17px)] max-w-[580px] mb-8">
            I’ve enjoyed participating in hackathons and was one of the
            organizers for the first hackathon at my college,
            <span className="text-primary"> JACHacks</span>. These experiences
            were both rewarding and fun, allowing me to refine my skills and
            work with others on impactful projects.
          </p>
        </article>
        <aside className="flex-shrink-0 md:w-1/2">
          <img
            src="https://via.placeholder.com/300" // Replace with your actual image URL
            alt="Placeholder"
            className="w-full h-auto rounded-lg"
          />
        </aside>
      </div>
    </section>
  );
}

export default About;
