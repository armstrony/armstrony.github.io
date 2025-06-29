import React from "react";

const QuoteSection = () => {
  return (
    <section className="flex justify-center">
      <div className="border-2 border-gray-600 p-8 text-center relative max-w-2xl">
        <blockquote className="text-2xl text-white italic">
          "Bad programmers worry about the code. Good programmers worry about
          data structures and their relationships."
        </blockquote>
        <cite className="block mt-4 text-gray-400 text-right">
          - Linus Torvalds
        </cite>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-400 text-5xl font-bold text-gray-800 flex items-center justify-center">
          “
        </div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-teal-400 text-5xl font-bold text-gray-800 flex items-center justify-center">
          ”
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
