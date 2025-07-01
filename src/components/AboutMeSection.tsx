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
