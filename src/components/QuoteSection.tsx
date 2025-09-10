// import React from "react";

const QuoteSection = () => {
  return (
    <section className="flex justify-center px-4 md:px-0 py-8 md:py-12">
      <div className="border-2 border-gray-600 p-4 md:p-8 text-center relative max-w-2xl mx-4">
        <blockquote className="text-lg md:text-2xl text-white italic leading-relaxed">
          "Bad programmers worry about the code. Good programmers worry about
          data structures and their relationships."
        </blockquote>
        <cite className="block mt-3 md:mt-4 text-gray-400 text-right text-sm md:text-base">
          - Linus Torvalds
        </cite>
        <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-teal-400 text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center">
          “
        </div>
        <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-teal-400 text-3xl md:text-5xl font-bold text-gray-800 flex items-center justify-center">
          ”
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
