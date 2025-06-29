import { Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between h-lvh"
    >
      <div className="mb-10 md:mb-0">
        <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight">
          Hafi is a <span className="text-teal-400">iOS Developer</span> and{" "}
          <span className="text-teal-400">Web Dev</span> and{" "}
          <span className="text-teal-400">DevOps Enthusiast</span>
        </h1>
        <p className="mt-4 text-gray-400">
          He Turning ideas into apps, websites, and pipelines.
        </p>
        <button className="mt-8 px-6 py-3 border border-teal-400 text-white font-semibold rounded-md hover:bg-teal-400/10 transition-colors duration-300 flex items-center gap-2">
          Contact me!! <Send size={18} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
