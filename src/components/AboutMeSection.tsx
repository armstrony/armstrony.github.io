// import React from "react";
import SectionTitle from "./SectionTitle";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-12 md:py-20 px-4 md:px-0">
      <SectionTitle title="about-me" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="md:w-3/5 space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base order-2 md:order-1">
          <p>Hello, i’m Hafi!</p>
          <p>
            I’m a self-taught front-end developer from Indonesia who builds
            responsive websites from the ground up and transforms them into
            modern, user-friendly experiences. Also I create iOS apps that
            enhance user experiences and solve user needs.
          </p>
          <p>
            Bringing ideas to life through websites and iOS apps has been a
            passion of mine. I’ve helped clients build their online presence and
            enjoy learning new tools and technologies as I grow.
          </p>
        </div>
        <div className="md:w-2/5 flex justify-center order-1 md:order-2">
          <img
            src="https://placehold.co/300x300/282c34/ffffff?text=Hafi"
            alt="About Hafi"
            className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-md border-b-4 border-teal-400"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
