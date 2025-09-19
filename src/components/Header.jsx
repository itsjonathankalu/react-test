import React from "react";

const Header = () => {
  return (
    <header className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">👑 freepik</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Vectors
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Photos
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                AI Images
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Icon
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Videos
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                PSD
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors"
              >
                Categories
              </a>
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-200 transition-colors">
              Log in
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
