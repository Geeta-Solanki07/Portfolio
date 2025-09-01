export const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 bg-secondary/10 relative">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Creative & Passionate Frontend Developer
          </h3>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            I’m a dedicated <span className="font-medium text-primary">IT student</span> and aspiring
            <span className="font-medium text-primary"> Frontend Developer</span> with hands-on
            experience in building responsive and user-friendly websites using
            <span className="font-medium"> HTML, CSS, JavaScript, React.js, and Tailwind CSS</span>.
          </p>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Known for strong problem-solving skills, adaptability, and a
            proactive learning approach, I aim to craft engaging digital
            experiences while continuously improving my technical expertise.
          </p>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Currently, I’m looking for exciting opportunities where I can
            contribute my skills, collaborate with creative teams, and grow as a
            professional web developer.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
            <a
              href="#contact"
              className="cosmic-button px-8 py-4 text-lg md:text-xl"
            >
              Get In Touch
            </a>

            <a
              href="https://drive.google.com/file/d/1c_m3s48zKeXrMCXmgnyRm41b2cR_zyhQ/view?usp=sharing"
              className="px-8 py-4 text-lg md:text-xl rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
