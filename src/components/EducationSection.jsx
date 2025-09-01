// src/components/EducationSection.jsx
import { FaGraduationCap } from "react-icons/fa";

export const EducationSection = () => {
  const educationData = [
    {
      year: "2023 - 2026",
      degree: "BBA - Bachelor of Business Administration",
      institution: "Sant Singaji Institute of Management & Science",
      university: "Vikram University, Ujjain",
      description:
        "Currently pursuing 3rd year BBA with specialization in Marketing & HR. Focused on learning organizational behavior, marketing research, and business management concepts.",
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-card p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="p-5 rounded-full bg-primary/20 text-primary">
                  <FaGraduationCap size={28} />
                </div>
              </div>

              {/* Education Info */}
              <div className="text-left flex-1">
                <span className="text-sm md:text-base text-muted-foreground">
                  {edu.year}
                </span>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-1">
                  {edu.degree}
                </h3>
                <p className="text-base md:text-lg font-medium text-primary mt-1">
                  {edu.institution}
                </p>
                <p className="text-base md:text-lg font-medium text-primary mt-1">
                  {edu.university}
                </p>
                <p className="text-sm md:text-base text-muted-foreground mt-3">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
