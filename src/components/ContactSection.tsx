// import React from "react";
import SectionTitle from "./SectionTitle";
import { Github, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20">
      <SectionTitle title="contacts" />
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <p className="text-gray-400 md:w-1/2">
          I’m currently available for freelance opportunities. However, if you
          have other requests or questions, don’t hesitate to contact me.
        </p>
        <div className="border border-gray-600 p-4 rounded-sm w-full md:w-auto">
          <h3 className="text-white font-semibold mb-4">Message me here</h3>
          <div className="flex items-center gap-4 mb-2">
            <Github size={24} className="text-gray-400" />
            <span className="text-gray-400">armstrony</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={24} className="text-gray-400" />
            <span className="text-gray-400">developer.hafi@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
