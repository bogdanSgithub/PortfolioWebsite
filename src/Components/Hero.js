function Hero() {
  return (
    <section className="flex flex-col w-10/12 md:w-9/12 lg:w-3/5 mx-auto mt-40">
      <h1 className="block text-primary mb-10 text-[clamp(13px,5vw,17px)]">
        Hi, my name is
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] mb-6">Bogdan Feher.</h2>
      <h3 className="text-[clamp(30px,7vw,60px)] text-secondText mb-12">
        I build things for the web.
      </h3>
      <p className="text-secondText max-w-[540px] text-[clamp(13px,5vw,17px)]">
        I'm a CS student with a passion for web development. I enjoy creating
        innovative solutions and exploring new technologies. This portfolio
        showcases my journey and work.
      </p>
    </section>
  );
}

export default Hero;
