import { BsFillEnvelopeFill } from "react-icons/bs";

function Contact() {
  return (
    <section className="flex flex-col items-center h-auto text-center pb-[12vh] mt-10">
      <div className="flex flex-row place-items-center text-[clamp(20px,6vw,35px)] mb-10">
        <BsFillEnvelopeFill className="fill-primary" />
        <h1 className="p-2">Contact</h1>
      </div>
      <p className="text-secondText max-w-[540px] text-[clamp(13px,5vw,17px)] mb-14">
        I’m currently seeking internship opportunities where I can apply my
        skills and continue learning in a professional environment. If you’re
        interested in discussing potential roles or collaborating on projects,
        please feel free to reach out.
      </p>
      <a
        href="mailto:bogdan.feher@gmail.com?subject=Internship%20Opportunity"
        className="bg-transparent hover:bg-primary text-primary hover:no-underline py-5 px-10 border border-primary hover:border-transparent rounded max-w-max hover:text-background transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get in Touch!
      </a>
    </section>
  );
}

export default Contact;
