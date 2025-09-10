// import React from "react";
import SectionTitle from "./SectionTitle";
import { Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-12 md:py-20 px-4 md:px-0">
      <SectionTitle title="contacts" />
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8">
        <p className="text-gray-400 md:w-1/2 text-sm md:text-base">
          I’m currently available for freelance opportunities. However, if you
          have other requests or questions, don’t hesitate to contact me.
        </p>
        <div className="border border-gray-600 p-3 md:p-4 rounded-sm w-full md:w-auto">
          <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">
            Message me here
          </h3>
          <div className="flex items-center gap-3 md:gap-4 mb-2 text-sm md:text-base">
            <Github size={20} className="text-gray-400 md:w-6 md:h-6" />
            <span className="text-gray-400 break-all">armstrony</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-sm md:text-base">
            <Mail size={20} className="text-gray-400 md:w-6 md:h-6" />
            <span className="text-gray-400 break-all">
              developer.hafi@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
