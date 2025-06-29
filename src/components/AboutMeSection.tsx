// import React from "react";
import SectionTitle from "./SectionTitle";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-20">
      <SectionTitle title="about-me" />
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-3/5 space-y-4 text-gray-400">
          <p>Hello, i’m Hafi!</p>
          <p>
            I’m a self-taught front-end developer based in Indonesia. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img
            src="https://placehold.co/300x300/282c34/ffffff?text=Hafi"
            alt="About Hafi"
            className="w-72 h-72 object-cover rounded-md border-b-4 border-teal-400"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
