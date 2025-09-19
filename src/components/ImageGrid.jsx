import React, { useState } from "react";
import { useImageAPI } from "../hooks/useImageAPI";

const ImageGrid = ({ searchQuery = "ai art" }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const { images, loading, error, hasMore, loadMore } =
    useImageAPI(searchQuery);

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured AI Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover stunning AI-generated imagery from real artists and
            creators
          </p>
        </div>

        {/* Empty State - No Search Query */}
        {!searchQuery && images.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                <svg
                  className="w-12 h-12 text-cyan-400"
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
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Explore AI Art?
              </h3>
              <p className="text-gray-400 mb-6">
                Start by searching for images above. Try keywords like "cars",
                "nature", "architecture", or "abstract art".
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "cars",
                  "nature",
                  "architecture",
                  "abstract",
                  "technology",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State - Search with No Results */}
        {searchQuery && images.length === 0 && !loading && !error && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full flex items-center justify-center border border-orange-500/30">
                <svg
                  className="w-12 h-12 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.073M6.343 6.343A8 8 0 1017.657 17.657 8 8 0 006.343 6.343z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No Images Found
              </h3>
              <p className="text-gray-400 mb-6">
                No images found for "{searchQuery}". Try searching for different
                keywords or check our available categories.
              </p>
              <div className="text-sm text-gray-500">
                Available categories: cars, nature, architecture, abstract,
                technology, food, people, animals, and more.
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-900/50 border border-red-700 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-red-400 mb-4">Failed to load images</p>
              <p className="text-gray-400 text-sm mb-4">{error}</p>
              <p className="text-gray-500 text-xs">
                Please try again or search for a different category.
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && images.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 relative">
                  {/* Skeleton badges */}
                  <div className="absolute top-4 left-4 w-20 h-6 bg-gray-600 rounded-full opacity-60"></div>
                  <div className="absolute top-4 right-4 w-10 h-6 bg-gray-600 rounded-full opacity-60"></div>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] animate-shimmer"></div>
                </div>
                <div className="p-4">
                  <div className="h-5 bg-gray-700 rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-1"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <div className="h-4 w-12 bg-gray-700 rounded"></div>
                      <div className="h-4 w-12 bg-gray-700 rounded"></div>
                    </div>
                    <div className="h-5 w-16 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Grid */}
        {!error && images.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-[1.02] hover:bg-gray-800/80 transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-cyan-500/30 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10"
                  onMouseEnter={() => setHoveredImage(image.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="aspect-[4/5] relative overflow-hidden rounded-t-2xl">
                    {/* Real Image or Gradient Fallback */}
                    {image.imageUrl ? (
                      <>
                        <img
                          src={image.thumbnailUrl || image.imageUrl}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${
                          image.gradient || "from-purple-600 to-blue-600"
                        } group-hover:scale-110 transition-transform duration-700`}
                      ></div>
                    )}

                    {/* AI Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 bg-black/60 backdrop-blur-md text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30 shadow-lg">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                        {image.aiModel}
                      </span>
                    </div>

                    {/* Resolution Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-gray-600/30 shadow-lg">
                        {image.resolution}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${
                        hoveredImage === image.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {hoveredImage === image.id && (
                        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 z-20">
                          <div className="flex space-x-3">
                            <button className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg border border-white/20">
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
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </button>
                            <button
                              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white p-4 rounded-full hover:scale-110 transition-all duration-200 shadow-lg border border-cyan-400/30"
                              onClick={() =>
                                window.open(image.imageUrl, "_blank")
                              }
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
                                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                            </button>
                            <button className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg border border-white/20">
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
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                          </div>
                          {/* Quick info on hover */}
                          <div className="text-center text-white px-4">
                            <p className="text-sm font-medium mb-1">
                              {image.title}
                            </p>
                            <p className="text-xs text-gray-300">
                              {image.resolution} • {image.category}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors duration-200">
                      {image.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {image.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>{image.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
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
                              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>{image.downloads}</span>
                        </div>
                      </div>

                      <span className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded border border-cyan-500/30">
                        {image.category}
                      </span>
                    </div>

                    {/* Author Credit */}
                    {image.author && (
                      <div className="mt-2 pt-2 border-t border-gray-700">
                        <p className="text-gray-500 text-xs">
                          Photo by{" "}
                          <a
                            href={image.authorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            {image.author}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              {hasMore && (
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    "Load More Images"
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGrid;
