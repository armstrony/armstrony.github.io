import React from "react";
import { ArrowUpRight } from "lucide-react";

interface SectionTitleProps {
  title: string;
  showViewAll?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  showViewAll = false,
}) => {
  return (
    <div className="flex justify-between items-center mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        <span className="text-teal-400">#</span>
        {title}
      </h2>
      {showViewAll && (
        <a
          href="#"
          className="flex items-center gap-1 md:gap-2 hover:text-teal-400 transition-colors duration-300 text-sm md:text-base"
        >
          View all <ArrowUpRight size={16} className="md:w-5 md:h-5" />
        </a>
      )}
    </div>
  );
};

export default SectionTitle;
