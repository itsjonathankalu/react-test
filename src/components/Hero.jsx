import React, { useState } from "react";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-lg transform rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          All the assets you need, in one place
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Find and download the best high-quality photos, videos, and mockups
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search all assets"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-14 text-gray-900 bg-white rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm transition-colors">
            📊 Poster
          </button>
          <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm transition-colors">
            🎬 Film
          </button>
          <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-sm transition-colors">
            🏷️ Banner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
