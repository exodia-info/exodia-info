import React from "react";
import Link from "next/link";

const VisibleTailwindHeader = ({ text }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center font-['monarcha',sans-serif] py-4">
      <div className="bg-black bg-opacity-20 backdrop-blur-md text-white flex justify-between items-center px-4 py-2 rounded-full max-w-[90vw] w-full">
        <div className="flex items-center group cursor-pointer">
          <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
            ©
          </span>
          <div className="ml-2 overflow-hidden">
            <p className="text-gray-300 group-hover:translate-x-[-100%] transition-transform duration-500 ease-in-out">
              {text}
            </p>
            <p className="text-white absolute top-0 left-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
              Exodia
            </p>
          </div>
        </div>
        <nav className="flex space-x-4">
          <Link href="/" className="relative group">
            <span className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <svg
                className="h-5 w-5 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
              Home
            </span>
            <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/projects" className="relative group">
            <span className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <svg
                className="h-5 w-5 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z" />
              </svg>
              Projects
            </span>
            <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default VisibleTailwindHeader;
