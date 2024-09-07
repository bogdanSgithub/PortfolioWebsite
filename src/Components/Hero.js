function Hero() {
  return (
    <section className="flex flex-col mt-[15vh] h-[80vh]">
      <h1 className="block text-primary mb-10 text-[clamp(13px,5vw,17px)]">
        Hi, my name is
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] mb-6">Bogdan Feher.</h2>
      <h3 className="text-[clamp(30px,7vw,52px)] text-secondText mb-10">
        I build software that works. <small>(sometimes)</small>
      </h3>
      <p className="text-secondText max-w-[540px] text-[clamp(13px,5vw,17px)] mb-14">
        I'm a CS student with a passion for software development. I enjoy
        creating innovative solutions and exploring new technologies. This
        portfolio showcases my projects and technical skills.
      </p>
      <a
        href="https://drive.google.com/file/d/1ESCKvXhKlauxcPqCB8Zu5V3R18_kcvYj/view?usp=sharing"
        className="bg-transparent hover:bg-primary text-primary hover:no-underline py-5 px-10 border border-primary hover:border-transparent rounded max-w-max hover:text-background transition-colors text-3xl mb-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out my Resume!
      </a>
    </section>
  );
}

export default Hero;
