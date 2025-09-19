import React from "react";

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      title: "Social media",
      type: "social",
    },
    {
      id: 2,
      title: "Design Poster",
      type: "design",
    },
    {
      id: 3,
      title: "Photo",
      type: "photo",
    },
    {
      id: 4,
      title: "Video",
      type: "video",
    },
  ];

  const renderCategoryIllustration = (type) => {
    switch (type) {
      case "social":
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Person with laptop */}
            <div className="relative">
              <div className="w-12 h-8 bg-blue-400 rounded border-2 border-white relative">
                <div className="absolute -top-4 left-2 w-6 h-6 bg-pink-400 rounded-full"></div>
                <div className="p-1">
                  <div className="h-1 bg-white rounded mb-1"></div>
                  <div className="h-1 bg-white rounded w-2/3"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400 rounded-full flex items-center justify-center text-xs">
                👥
              </div>
            </div>
          </div>
        );

      case "design":
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Design tools */}
            <div className="relative">
              <div className="w-10 h-12 bg-white rounded border-2 border-gray-300 relative">
                <div className="h-3 bg-yellow-400 rounded-t"></div>
                <div className="p-1">
                  <div className="h-1 bg-gray-300 rounded mb-1"></div>
                  <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-2 w-6 h-6 bg-orange-400 rounded flex items-center justify-center text-xs">
                🎨
              </div>
            </div>
          </div>
        );

      case "photo":
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Camera and image */}
            <div className="relative">
              <div className="w-12 h-8 bg-gray-200 rounded border-2 border-gray-400 flex items-center justify-center">
                <div className="w-8 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded"></div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-xs">
                📷
              </div>
              <div className="absolute -bottom-1 left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        );

      case "video":
        return (
          <div className="w-full h-full flex items-center justify-center relative">
            {/* Video player */}
            <div className="relative">
              <div className="w-12 h-8 bg-black rounded border-2 border-gray-600 flex items-center justify-center">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-400 rounded flex items-center justify-center text-xs">
                🎬
              </div>
            </div>
          </div>
        );

      default:
        return <div className="text-4xl">🎨</div>;
    }
  };

  return (
    <section className="bg-teal-700 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-teal-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Illustration placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center text-3xl group-hover:scale-105 transition-transform relative overflow-hidden">
                  <div className="absolute inset-0 bg-white bg-opacity-10 rounded-lg"></div>
                  <div className="relative z-10">
                    {renderCategoryIllustration(category.type)}
                  </div>
                </div>

                {/* Category title */}
                <h3 className="text-white font-semibold text-lg">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
