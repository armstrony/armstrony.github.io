// Your corrected App.tsx
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import QuoteSection from "./components/QuoteSection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import AboutMeSection from "./components/AboutMeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// import ReactLenis from "lenis/react"; // Remove this since we're using GSAP ScrollSmoother

export default function App() {
  return (
    // MUST use id="smooth-wrapper" not className
    <div id="smooth-wrapper">
      {/* MUST use id="smooth-content" not className */}
      <div id="smooth-content">
        <div className="bg-[#282C34] text-gray-300 font-mono min-h-screen">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-700/50 rounded-sm transform rotate-45"></div>
            <div className="absolute bottom-40 right-10 w-48 h-48 border-2 border-gray-700/50 rounded-full opacity-30"></div>
            <div className="absolute bottom-1/2 left-1/4 w-24 h-24 border-dashed border-gray-600/50 rounded-lg"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 border-dotted border-green-500/30 rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <main>
              <HeroSection />
              <QuoteSection />
              <div>
                <ProjectsSection />
              </div>
              <div>
                <SkillsSection />
              </div>
              <div>
                <AboutMeSection />
              </div>
              <div>
                <ContactSection />
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
