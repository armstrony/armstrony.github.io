import { useRef, MutableRefObject, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Header = () => {
  const navLinks = ["#projects", "#skills", "#about-me", "#contacts"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Properly type the refs
  const main = useRef<HTMLElement>(null);
  const smoother: MutableRefObject<ScrollSmoother | null> = useRef(null);

  const scrollTo = (target: string) => {
    if (smoother.current) {
      // Remove the # from the target for scrollTo
      const cleanTarget = target.startsWith("#") ? target.substring(1) : target;
      smoother.current.scrollTo(`#${cleanTarget}`, true, "top top");
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if required elements exist before creating ScrollSmoother
      const wrapper = document.querySelector("#smooth-wrapper");
      const content = document.querySelector("#smooth-content");

      if (!wrapper || !content) {
        console.error(
          "ScrollSmoother requires #smooth-wrapper and #smooth-content elements"
        );
        return;
      }

      // create the smooth scroller
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });

      console.log("ScrollSmoother created successfully");

      // Only create ScrollTriggers for elements that actually exist
      navLinks.forEach((link) => {
        const sectionId = link.substring(1); // Remove #
        const element = document.querySelector(`#${sectionId}`);

        if (element) {
          ScrollTrigger.create({
            trigger: `#${sectionId}`,
            start: "top center",
            end: "bottom center",
            markers: false,
            onEnter: () => console.log(`Entered ${sectionId}`),
            onLeave: () => console.log(`Left ${sectionId}`),
          });
        } else {
          console.warn(`Element not found: #${sectionId}`);
        }
      });
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (smoother.current) {
        smoother.current.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header
      className="flex justify-between items-center py-4 md:py-8 px-4 md:px-0"
      ref={main}
    >
      <div className="text-xl md:text-2xl font-bold text-white">Hafi</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={link}
            className="hover:text-teal-400 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link);
            }}
          >
            <span className="text-teal-400">#</span>
            {link.substring(1)}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-gray-800/95 backdrop-blur-sm border-t border-gray-600 md:hidden z-50">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={link}
                className="hover:text-teal-400 transition-colors duration-300 text-center py-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link);
                }}
              >
                <span className="text-teal-400">#</span>
                {link.substring(1)}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
