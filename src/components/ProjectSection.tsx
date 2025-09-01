import React from "react";
import SectionTitle from "./SectionTitle";
import chromatchImage from "../assets/chromatch.jpeg";
import cofficeImage from "../assets/coffice.png";
import meforaImage from "../assets/MeFoRa.png";
import liviumImage from "../assets/livium.png";
import metain from "../assets/METAIN.png";

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
    title: "Chromatch",
    image: chromatchImage,
    bgColor: "bg-pink-800/50",
    tech: ["Swift", "SwiftUI", "Vision", "SwiftData", "VideoToolbox"],
    description:
      "Chromatch helps you discover your personal color season, empowering you to choose makeup and clothing that truly complement your natural beauty. Say goodbye to uncertainty and hello to confident purchasing decisions!",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    title: "Coffice",
    image: cofficeImage,
    bgColor: "bg-green-900/20",
    tech: ["Swift", "SwiftUI", "Core Location", "HealthKit", "Core Motion"],
    description:
      "An iOS app built with SwiftUI that helps users discover coffee shops within Green Office Park, BSD – Tangerang. Designed with privacy, efficiency, and user experience in mind using Apple-native frameworks: CoreLocation, CoreMotion, MapKit, and HealthKit.",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    title: "MeFoRa",
    image: meforaImage,
    bgColor: "bg-sky-800",
    tech: ["Android", "Kotlin", "Jetpack Compose", "Firebase"],
    description:
      "An app that helps users with specific health conditions make informed dietary choices by providing personalized lists of recommended and restricted foods based on their illness.",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    title: "METAIN",
    image: metain,
    bgColor: "bg-blue",
    tech: [
      "MacOS",
      "SwiftUI",
      "CoreML",
      "MapKit",
      "Charts",
      "YoLOv11",
      "Machine Learning",
    ],
    description:
      "META is a macOS application built with SwiftUI that leverages a CoreML‑converted YOLOv11 model to detect vehicles in camera or video feeds. It visualizes traffic density as a heatmap on MapKit, presents interactive charts of volume over time, and exports aggregated data as CSV for further analysis.",
    liveLink: "#",
    cachedLink: "#",
  },
  {
    title: "Project Livium",
    image: liviumImage,
    bgColor: "bg-purple-900/20",
    tech: ["HTML", "Laravel", "Bootstrap", "Javascript", "PHP"],
    description:
      "A VTuber agency website built with Laravel and Tailwind CSS, featuring pages for vision, staff, talents, and contact. Designed to showcase the agency’s identity and make it easy for fans and partners to connect.",
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
  // liveLink,
}) => (
  <div className="border border-gray-600 rounded-sm">
    <div
      className={`p-4 ${bgColor} flex items-center justify-center border-b border-gray-600`}
    >
      {image && (
        <img src={image} alt={title} className=" h-60 w-full rounded-sm" />
      )}
    </div>
    <div className="p-4">
      <h3 className="text-xl text-white font-semibold">{title}</h3>
      <p className="text-gray-400 text-base mb-4">{description}</p>
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
        {/* <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-teal-400 text-white rounded-sm hover:bg-teal-400/10 transition-colors duration-300"
        >
          Live {"<~>"}
        </a> */}
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
