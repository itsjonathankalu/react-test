import React, { useState } from "react";

const DarkHero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm || "ai art");
    }
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag.toLowerCase());
    if (onSearch) {
      onSearch(tag.toLowerCase());
    }
  };

  return (
    <section className="bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800 border border-cyan-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-cyan-400 text-sm font-medium">
              AI-Powered Stock Library
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Discover
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI-Generated
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Imagery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore millions of high-quality AI-generated images, vectors, and
            digital assets. Perfect for your creative projects with cutting-edge
            artificial intelligence.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <form onSubmit={handleSearch}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-2 backdrop-blur-sm">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search for AI-generated images, vectors, concepts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 bg-transparent text-white placeholder-gray-500 px-6 py-4 text-lg focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                    >
                      <svg
                        className="w-5 h-5"
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
                      <span className="font-medium">Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              "Abstract Art",
              "Portraits",
              "Landscapes",
              "Digital Art",
              "Conceptual",
              "Futuristic",
            ].map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTagClick(tag)}
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                10M+
              </div>
              <div className="text-gray-400">AI Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-400">Daily Uploads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-400">AI Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkHero;
