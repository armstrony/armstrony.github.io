import React from "react";
import SectionTitle from "./SectionTitle";

interface Project {
  title: string;
  image: string;
  bgColor: string;
  tech: string[];
  description: string;
  liveLink: string;
  cachedLink: string;
}

const projectsData: Project[] = [
  {
    title: "ChertNodes",
    image: "https://placehold.co/100x50/3a3f4b/ffffff?text=ChertNodes",
    bgColor: "bg-gray-800/50",
    tech: ["HTML", "SCSS", "Python", "Flask"],
    description: "Minecraft servers hosting",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    title: "ProtectX",
    image: "https://placehold.co/100x50/2b423c/ffffff?text=ProtectX",
    bgColor: "bg-green-900/20",
    tech: [
      "React",
      "Express",
      "Discord.js",
      "Node.js",
      "HTML",
      "SCSS",
      "Python",
      "Flask",
    ],
    description: "Discord anti-crash bot",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    title: "Kahoot Answers",
    image: "https://placehold.co/100x50/4d2e8e/ffffff?text=Kahoot!",
    bgColor: "bg-purple-900/20",
    tech: ["SCSS", "Express", "Node.js"],
    description: "Get answers to your kahoot quiz",
    liveLink: "#",
    cachedLink: "#",
  },
];

const ProjectCard: React.FC<Project> = ({
  title,
  image,
  bgColor,
  tech,
  description,
  liveLink,
}) => (
  <div className="border border-gray-600 rounded-sm">
    <div
      className={`p-4 ${bgColor} flex items-center justify-between border-b border-gray-600`}
    >
      <h3 className="text-xl text-white font-semibold">{title}</h3>
      {image && (
        <img
          src={image}
          alt={title}
          className="h-8 object-contain rounded-sm"
        />
      )}
    </div>
    <div className="p-4">
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-teal-400 text-white rounded-sm hover:bg-teal-400/10 transition-colors duration-300"
        >
          Live {"<~>"}
        </a>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <SectionTitle title="projects" showViewAll={true} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
