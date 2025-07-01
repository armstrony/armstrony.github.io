import React from "react";
import SectionTitle from "./SectionTitle";

const skillsData = {
  languages: ["Swift", "Kotlin", "PHP", "JavaScript", "Python", "TypeScript"],
  databases: ["MySQL", "Firebase"],
  tools: [
    "VSCode",
    "Xcode",
    "Terminal",
    "Figma",
    "Git",
    "Trello",
    "Discord",
    "Notion",
  ],
  other: ["HTML", "CSS", "JSON", "XML", "Photoshop"],
  frameworks: [
    "Laravel",
    "Jetpack Compose",
    "SwiftUI",
    "SwiftData",
    "Core Location",
    "Core Motion",
    "MapKit",
    "HealthKit",
    "Bootstrap",
    "Tailwind CSS",
  ],
};

const SkillCategory: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="border border-gray-600 rounded-sm">
    <h3 className="text-white font-semibold p-2 border-b border-gray-600">
      {title}
    </h3>
    <div className="p-2 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="text-gray-400">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <SectionTitle title="skills" />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* Placeholder for decorative graphic */}
          <div className="grid grid-cols-4 gap-4 w-64">
            <div className="w-12 h-12 border-2 border-gray-600"></div>
            <div className="w-12 h-12"></div>
            <div className="w-12 h-12 border-2 border-gray-600 rotate-45"></div>
            <div className="w-12 h-12"></div>
            <div className="w-12 h-12"></div>
            <div className="w-12 h-12 border-2 border-gray-600"></div>
            <div className="w-12 h-12"></div>
            <div className="w-12 h-12 border-2 border-gray-600 rotate-45"></div>
            <div className="w-12 h-12 border-2 border-gray-600"></div>
            <div className="w-24 h-24 border-3 border-gray-600"></div>
            <div className="w-24 h-24 border-3 border-blue-400 rotate-45"></div>
            <div className="w-36 h-24 border-3 border-blue-400 rotate-60"></div>
            <div className="w-64 h-64 border-3 border-blue-400 rotate-45"></div>
            <div className="w-24 h-24 border-3 border-green-400 rotate-25"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SkillCategory title="Languages" items={skillsData.languages} />
          <SkillCategory title="Tools" items={skillsData.tools} />
          <SkillCategory title="Frameworks" items={skillsData.frameworks} />
          <SkillCategory title="Databases" items={skillsData.databases} />
          <SkillCategory title="Other" items={skillsData.other} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
