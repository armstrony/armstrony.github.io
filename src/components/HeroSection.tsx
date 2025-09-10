import { Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center md:min-h-screen h-dvh py-8 md:py-0"
    >
      <div className="mb-8 md:mb-0 text-center md:text-left px-4 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight">
          Hello! I'm a <span className="text-teal-400">iOS Developer</span> and{" "}
          <span className="text-teal-400">Web Dev</span> and{" "}
          <span className="text-teal-400">DevOps Enthusiast</span>
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">
          I'm turning ideas into apps, websites, and pipelines.
        </p>
        <button className="mt-6 md:mt-8 px-4 md:px-5 py-2 md:py-3 border border-teal-400 text-white font-semibold rounded-md hover:bg-teal-400/10 transition-colors duration-300">
          <a
            href="https://linkedin.com/in/mkhadafiess"
            className="flex items-center gap-2 text-sm md:text-base"
          >
            Contact me!! <Send size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
