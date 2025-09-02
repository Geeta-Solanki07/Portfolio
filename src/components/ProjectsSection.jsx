import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Img from "../assets/age-calculator.png";
import Img2 from "../assets/quiz-app.png";
import Img3 from "../assets/restaurant-app.png";

// const projects = [
//   {
//     id: 1,
//     title: "Portfolio Landing Page",
//     description: "A beautiful landing page app using React and Tailwind.",
//     image: "/projects/project1.png",
//     tags: ["React", "TailwindCSS"],
//     demoUrl: "https://geeta-75.github.io/quiz-app/",
//     githubUrl: "https://github.com/Geeta-75/quiz-app",
//   },
//   {
//     id: 2,
//     title: "Blog App",
//     description:
//       "Interactive blog app with authentication, posting, and data visualization.",
//     image: "/projects/project2.png",
//     tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
//     demoUrl: "https://your-blog-demo-link.com",
//     githubUrl: "https://github.com/Geeta-75/blog-app",
//   },
//   {
//     id: 3,
//     title: "E-commerce Platform",
//     description:
//       "Full-featured e-commerce platform with user authentication and payment processing.",
//     image: "/projects/project3.png",
//     tags: ["React", "Node.js", "Stripe"],
//     demoUrl: "https://your-ecommerce-demo-link.com",
//     githubUrl: "https://github.com/Geeta-75/ecommerce-platform",
//   },
// ];

const projects = [
  {
    id: 1,
    title: "Age Calculator",
    description: "Simple age calculator app using HTML, CSS, and JavaScript.",
    image: Img,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://geeta-solanki07.github.io/age-calculator/",
    githubUrl: "https://github.com/Geeta-Solanki07/age-calculator",
  },
  {
    id: 2,
    title: "Quiz App",
    description:
      "Interactive quiz app using HTML, CSS, and JavaScript with multiple questions and scoring system.",
    image: Img2,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://geeta-solanki07.github.io/quiz-app/",
    githubUrl: "https://github.com/Geeta-Solanki07/quiz-app",
  },
  {
    id: 3,
    title: "Restaurant App",
    description:
      "Responsive restaurant website showcasing menu, events, and reservations using HTML, CSS, JavaScript, and Bootstrap 5.",
    image: Img3,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://geeta-solanki07.github.io/restaurant-app/",
    githubUrl: "https://github.com/Geeta-Solanki07/restaurant-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl md:text-2xl font-bold mb-2 flex-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base flex-1 mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-start items-center mt-auto gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-lg md:text-xl"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Geeta-75"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
