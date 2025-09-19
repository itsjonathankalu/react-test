import React from "react";

const Results = () => {
  // Sample poster data matching the design
  const posters = [
    {
      id: 1,
      title: "MOON",
      description: "Vintage moon poster design",
      type: "moon",
    },
    {
      id: 2,
      title: "GOOD DAY",
      description: "Colorful motivational poster",
      type: "goodday",
    },
    {
      id: 3,
      title: "NIKE EST 1964",
      description: "Sports brand vintage poster",
      type: "nike",
    },
    {
      id: 4,
      title: "Hey Sunshine",
      description: "Retro apple character design",
      type: "sunshine",
    },
  ];

  const renderPoster = (poster) => {
    switch (poster.type) {
      case "moon":
        return (
          <div className="w-full h-full bg-gradient-to-b from-teal-800 to-teal-900 relative flex flex-col justify-between p-4">
            {/* Stars */}
            <div className="absolute top-4 left-4 text-yellow-300 text-xs">
              ✦
            </div>
            <div className="absolute top-8 right-6 text-yellow-300 text-xs">
              ✦
            </div>
            <div className="absolute bottom-16 left-8 text-yellow-300 text-xs">
              ✦
            </div>

            {/* Moon */}
            <div className="flex-1 flex items-center justify-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full relative">
                <div className="absolute top-3 left-3 w-3 h-3 bg-yellow-200 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-200 rounded-full"></div>
                <div className="absolute top-6 right-3 w-1 h-1 bg-yellow-200 rounded-full"></div>
              </div>
            </div>

            {/* Text */}
            <div className="bg-orange-600 text-white text-center py-3 text-xl font-bold">
              MOON
            </div>
          </div>
        );

      case "goodday":
        return (
          <div className="w-full h-full bg-white flex flex-col">
            {/* Grid of colorful squares */}
            <div className="flex-1 grid grid-cols-2 gap-1 p-3">
              <div className="bg-yellow-400 rounded flex items-center justify-center text-black text-xs font-bold">
                It's a
              </div>
              <div className="bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">
                GOOD
              </div>
              <div className="bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                DAY
              </div>
              <div className="bg-teal-500 rounded flex items-center justify-center text-white text-xs font-bold">
                to be
              </div>
            </div>
            {/* Bottom banner */}
            <div className="bg-red-500 text-white text-center py-3 text-lg font-bold">
              Alive!
            </div>
          </div>
        );

      case "nike":
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 via-green-500 to-green-700 relative flex flex-col justify-between p-4">
            {/* Diagonal stripes */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-300 to-transparent transform rotate-45 scale-150"></div>
            </div>

            {/* Nike swoosh area */}
            <div className="flex-1 flex items-center justify-center relative z-10">
              <div className="text-white text-6xl font-bold transform -rotate-12">
                ✓
              </div>
            </div>

            {/* Text */}
            <div className="bg-green-700 text-white text-center py-2 text-sm font-bold relative z-10">
              EST 1964
            </div>
          </div>
        );

      case "sunshine":
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-300 via-blue-400 to-blue-600 relative flex flex-col p-4">
            {/* Top text */}
            <div className="text-center">
              <div className="text-black font-bold text-lg italic">
                Hey Sunshine
              </div>
            </div>

            {/* Apple character */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                {/* Apple body */}
                <div className="w-16 h-16 bg-red-500 rounded-full relative">
                  {/* Face */}
                  <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black rounded-full"></div>

                  {/* Leaf */}
                  <div className="absolute -top-2 right-4 w-3 h-4 bg-green-500 rounded-full transform rotate-45"></div>
                </div>

                {/* Arms */}
                <div className="absolute top-8 -left-4 w-8 h-3 bg-red-500 rounded-full transform -rotate-45"></div>
                <div className="absolute top-8 -right-4 w-8 h-3 bg-red-500 rounded-full transform rotate-45"></div>

                {/* Legs */}
                <div className="absolute -bottom-4 left-2 w-3 h-8 bg-white rounded-full"></div>
                <div className="absolute -bottom-4 right-2 w-3 h-8 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl">🎨</span>
          </div>
        );
    }
  };

  const categories = [
    { name: "Poster retro", active: true },
    { name: "Photos", active: false },
    { name: "Vectors", active: false },
    { name: "Videos", active: false },
    { name: "Videos", active: false },
  ];

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category.active
                  ? "bg-red-600 text-white"
                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Showing results for{" "}
            <span className="text-teal-600">poster retro</span>
          </h2>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <span>📷</span>
              <span>Images 92.5%</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📁</span>
              <span>Collections 313</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Sort by:</span>
              <select className="border border-gray-300 rounded px-2 py-1">
                <option>Most relevant</option>
                <option>Newest</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Poster Image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                {renderPoster(poster)}

                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>

                {/* Overlay Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-2 text-white text-sm font-medium hover:bg-opacity-30 transition-colors">
                    Download
                  </button>
                </div>
              </div>

              {/* Poster Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {poster.title}
                </h3>
                <p className="text-xs text-gray-600">{poster.description}</p>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Free
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Load more results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
