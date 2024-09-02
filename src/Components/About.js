import { BsFillPersonFill } from "react-icons/bs";

function About() {
  return (
    <section className="mt-16">
      <div className="flex flex-row place-items-center m-3 text-[clamp(20px,6vw,50px)] mb-12">
        <BsFillPersonFill className="fill-primary" />
        <h1 className="p-2 ">About</h1>
      </div>
      <p className="text-secondText text-[clamp(13px,5vw,17px)] max-w-[580px] mb-8">
        Hello! I’m Bogdan Feher, a passionate developer with a deep love for
        coding and technology. In my second year at John Abbott College, I’m
        actively engaged in software development and exploring new ideas. At the
        moment, I’m particularly excited about AI and web development which I
        believe offer endless opportunities for innovation and growth.
      </p>
      <p className="text-secondText text-[clamp(13px,5vw,17px)] max-w-[580px]">
        I’ve enjoyed participating in hackathons and was one of the organizers
        for the first hackathon at my college. These experiences were both
        rewarding and fun, allowing me to refine my skills and work with others
        on impactful projects.
      </p>
    </section>
  );
}

export default About;
