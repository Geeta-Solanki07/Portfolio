import profilePic from "../assets/profile2.jpg"; // <-- Add your photo here

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container max-w-6xl mx-auto z-10 flex flex-col md:flex-row-reverse items-center justify-center gap-10">
        {/* Profile Image (Right Side) */}
        <div className="flex-shrink-0">
          <div className="relative group">
            <img
              src={profilePic}
              alt="Geeta Solanki"
              className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-primary transform transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/40 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Text Content (Left Side) */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight opacity-0 animate-fade-in">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Geeta Solanki
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mt-4 opacity-0 animate-fade-in-delay-2 max-w-xl">
            A{" "}
            <span className="text-primary font-semibold">
              Frontend Developer{" "}
            </span>
            passionate about designing and developing interactive, modern, and
            accessible web applications that bring ideas to life.{" "}
            <span className="text-primary font-semibold">
              interactive experiences
            </span>
            .
          </p>

          <div className="pt-5 opacity-0 animate-fade-in-delay-3 flex justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-primary to-pink-500 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              🚀 Explore My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
