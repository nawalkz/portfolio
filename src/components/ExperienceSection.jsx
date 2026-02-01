import React from "react";

const experience = [
  {
    id: 1,
    duration: "2025 – Present",
    company: "Ryd Mediatech",
    post: "Web Development Intern – Full-Stack",
    description: [
      "Improved and optimized existing functionalities",
      "Designed and added advanced tracking and archiving modules",
      "Presented and demonstrated the solution to partner cooperatives",
      "Analyzed real client needs and adapted the application independently",
    ],
  },
  {
    id: 2,
    duration: "2025 – 2 months",
    company: "Ryd Mediatech",
    post: "Web Development Intern – Cooperative Management Project",
    description: [
      "Initial design and development of a web application for cooperative management",
      "Management of sales, payments, and archiving",
      "Development using Laravel, JavaScript, HTML, Tailwind CSS, and MySQL",
    ],
  },
  {
    id: 3,
    duration: "2025",
    company: "École Nationale d’Architecture (ENA)",
    post: "Web Development Intern (Final Year Internship)",
    description: [
      "Development of a web application for managing books, loans/returns, and notifications",
      "Implementation of an intuitive user dashboard",
    ],
  },
];


const ExperienceSection = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
      {experiences.map(({ id, duration, company, post, description }) => (
        <div
          className="border-2 border-primary backdrop-blur-sm text-white bg-white/30 p-8 rounded-3xl transition-transform duration-300"
          key={id}
        >
          <div className="flex items-center">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
              👨‍💻
            </span>
            <h3 className="text-xl font-semibold text-white ml-4">{post}</h3>
          </div>

          <div className="text-base mt-5 space-y-1">
            <p className="text-gray-200 font-medium">{duration}</p>
            <p className="text-gray-300">{company}</p>
          </div>

          {/* ✅ description added here */}
          <p className="text-gray-100 mt-4 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
