// import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 mt-20 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold">
            Hafi <span className="text-gray-400">developer.hafi@gmail.com</span>
          </p>
          <p className="text-gray-400">
            iOS Devs, Web Devs, and front-end developer
          </p>
        </div>
        <div>
          <h3 className="text-white text-xl mb-2">Media</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Github">
              <Github className="text-gray-400 hover:text-white" />
            </a>
            <a href="#" aria-label="Figma">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 hover:text-white"
              >
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M8 12C8 14.2091 9.79086 16 12 16V8C9.79086 8 8 9.79086 8 12Z"
                  fill="#282C34"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Discord">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 hover:text-white"
              >
                <path
                  d="M20.3175 3.6825C18.675 -0.1075 15.825 0.0025 15.825 0.0025C15.825 0.0025 15.2175 1.5175 14.3775 2.5825C11.8725 2.0125 9.615 2.0125 7.23 2.5825C6.3825 1.5175 5.7825 0.0025 5.7825 0.0025C5.7825 0.0025 2.925 -0.1075 1.29 3.6825C0.0075 7.9725 -0.345 12.1875 1.05 16.035C2.8875 18.2175 5.415 19.32 5.415 19.32L6.375 18.015C5.2575 17.4375 4.3275 16.59 3.6525 15.57C3.5475 15.3525 3.45 15.1275 3.3525 14.9025C3.3375 14.865 3.3225 14.835 3.3075 14.7975C3.3075 14.7975 3.2325 14.5875 3.3375 14.3475C6.18 16.32 9.9375 16.9275 13.575 15.9375C14.9475 17.5875 16.965 18.42 18.2325 19.32L19.1925 18.015C19.1925 18.015 21.72 18.2175 23.5575 16.035C24.945 12.1875 24.6 7.9725 23.3175 3.6825L20.3175 3.6825ZM8.73 13.4175C7.68 13.4175 6.825 12.51 6.825 11.3925C6.825 10.2825 7.6725 9.375 8.73 9.375C9.7875 9.375 10.6425 10.2825 10.635 11.3925C10.635 12.51 9.78 13.4175 8.73 13.4175ZM15.8775 13.4175C14.8275 13.4175 13.9725 12.51 13.9725 11.3925C13.9725 10.2825 14.82 9.375 15.8775 9.375C16.935 9.375 17.79 10.2825 17.7825 11.3925C17.7825 12.51 16.935 13.4175 15.8775 13.4175Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8 text-sm">
        &copy; Copyright {new Date().getFullYear()}. Made by Hafi
      </p>
    </footer>
  );
};

export default Footer;
