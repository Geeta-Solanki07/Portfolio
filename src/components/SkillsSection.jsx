import { useState } from "react";

// Skills Data
const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Communication", category: "SoftSkills" },
  { name: "Problem Solving", category: "SoftSkills" },
  { name: "Teamwork", category: "SoftSkills" },
  { name: "Time Management", category: "SoftSkills" },
  { name: "Leadership", category: "SoftSkills" },
];

// Categories
const categories = ["all", "frontend", "backend", "tools", "SoftSkills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtered Skills
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-lg md:text-xl font-semibold capitalize focus:outline-none 
              ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 hover:bg-primary hover:text-white flex items-center justify-center cursor-pointer"
            >
              <span className="text-lg md:text-xl font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};





// import { useState } from "react";

// // Skills Data
// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "Bootstrap", level: 90, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// // Categories
// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   // Filtered Skills
//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );

//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         {/* Category Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full transition-all duration-300 capitalize focus:outline-none 
//               ${
//                 activeCategory === category
//                   ? "bg-primary text-white shadow-md scale-105"
//                   : "bg-secondary/70 text-foreground hover:bg-secondary"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
//             >
//               {/* Skill Title */}
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold text-lg">{skill.name}</h3>
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>

//               {/* Progress Bar */}
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left transition-all ease-out duration-1000"
//                   style={{ width: `${skill.level}%` }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
