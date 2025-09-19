import React from "react";

const DarkHeader = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 backdrop-blur-md bg-opacity-95 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                PixelForge
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                Browse
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                AI Generator
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                Collections
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DarkHeader;
