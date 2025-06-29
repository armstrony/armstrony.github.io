import React from "react";

const Header = () => {
  const navLinks = ["#projects", "#skills", "#about-me", "#contacts"];
  return (
    <header className="flex justify-between items-center py-8">
      <div className="text-2xl font-bold text-white">Hafi</div>
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={link}
            className="hover:text-teal-400 transition-colors duration-300"
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
