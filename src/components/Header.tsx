import { useRef, MutableRefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Header = () => {
  const navLinks = ["#projects", "#skills", "#about-me", "#contacts"];

  // Properly type the refs
  const main = useRef<HTMLElement>(null);
  const smoother: MutableRefObject<ScrollSmoother | null> = useRef(null);

  const scrollTo = (target: string) => {
    if (smoother.current) {
      // Remove the # from the target for scrollTo
      const cleanTarget = target.startsWith("#") ? target.substring(1) : target;
      smoother.current.scrollTo(`#${cleanTarget}`, true, "top top");
    }
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

      // create the smooth scroller FIRST!
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
    <header className="flex justify-between items-center py-8" ref={main}>
      <div className="text-2xl font-bold text-white">Hafi</div>
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={link}
            className="hover:text-teal-400 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link); // Pass the actual link target
            }}
          >
            <span className="text-teal-400">#</span>
            {link.substring(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
