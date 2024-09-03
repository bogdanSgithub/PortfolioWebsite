import Button from "./Button";

function Hero() {
  return (
    <section className="flex flex-col mt-[15vh] h-[80vh]">
      <h1 className="block text-primary mb-10 text-[clamp(13px,5vw,17px)]">
        Hi, my name is
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] mb-6">Bogdan Feher.</h2>
      <h3 className="text-[clamp(30px,7vw,52px)] text-secondText mb-12">
        I build software that works. <small>(sometimes)</small>
      </h3>
      <p className="text-secondText max-w-[540px] text-[clamp(13px,5vw,17px)] mb-14">
        I'm a CS student with a passion for software development. I enjoy
        creating innovative solutions and exploring new technologies. This
        portfolio showcases my projects and technical skills.
      </p>
      <Button
        link="https://drive.google.com/file/d/1n9mqRR8xWyRbbxZcQN_Tr6lR0Xu9ANnZ/view?usp=sharing"
        text="Check out my Resume!"
      />
    </section>
  );
}

export default Hero;
