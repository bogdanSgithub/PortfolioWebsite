function Hero() {
  return (
    <section className="flex flex-col mt-[12vh] h-screen">
      <h1 className="block text-primary mb-10 text-[clamp(13px,5vw,17px)]">
        Hi, my name is
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] mb-6">Bogdan Feher.</h2>
      <h3 className="text-[clamp(30px,7vw,60px)] text-secondText mb-12">
        I build software that works.
      </h3>
      <p className="text-secondText max-w-[540px] text-[clamp(13px,5vw,17px)] mb-12">
        I'm a CS student with a passion for web development. I enjoy creating
        innovative solutions and exploring new technologies. This portfolio
        showcases my journey and work.
      </p>
      <a
        href="https://drive.google.com/file/d/1n9mqRR8xWyRbbxZcQN_Tr6lR0Xu9ANnZ/view?usp=sharing"
        className="bg-transparent hover:bg-primary text-primary hover:no-underline py-5 px-10 border border-primary hover:border-transparent rounded max-w-max hover:text-background"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my Resume!
      </a>
    </section>
  );
}

export default Hero;
