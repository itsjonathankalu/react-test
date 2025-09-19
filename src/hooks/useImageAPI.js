import { useState, useEffect } from "react";

// Custom hook for fetching images from static.photos API
export const useImageAPI = (query = "") => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Using static.photos API - no API key required!
  const STATIC_PHOTOS_BASE = "https://static.photos";

  // Available categories from static.photos (40+ categories)
  const STATIC_CATEGORIES = [
    "animals",
    "architecture",
    "cars",
    "city",
    "food",
    "landscape",
    "nature",
    "people",
    "technology",
    "abstract",
    "art",
    "beach",
    "business",
    "cats",
    "coffee",
    "computer",
    "dark",
    "dogs",
    "fashion",
    "flowers",
    "forest",
    "gym",
    "health",
    "house",
    "ice",
    "interior",
    "kitchen",
    "library",
    "music",
    "office",
    "party",
    "plants",
    "restaurant",
    "school",
    "space",
    "sports",
    "street",
    "travel",
    "vintage",
    "water",
    "wedding",
    "winter",
  ];

  // Map search queries to static.photos categories
  const getCategoryFromQuery = (searchQuery) => {
    const queryLower = searchQuery.toLowerCase();

    // Direct category matches
    if (STATIC_CATEGORIES.includes(queryLower)) {
      return queryLower;
    }

    // Search term to category mapping
    const categoryMap = {
      "ai art": "art",
      "digital art": "art",
      car: "cars",
      vehicle: "cars",
      automotive: "cars",
      portrait: "people",
      portraits: "people",
      human: "people",
      landscape: "landscape",
      landscapes: "landscape",
      scenery: "landscape",
      building: "architecture",
      buildings: "architecture",
      tech: "technology",
      computer: "computer",
      futuristic: "technology",
      conceptual: "abstract",
      "abstract art": "abstract",
      animal: "animals",
      pet: "animals",
      cat: "cats",
      dog: "dogs",
      flower: "flowers",
      plant: "plants",
      food: "food",
      cuisine: "food",
      natural: "nature",
      outdoor: "nature",
      city: "city",
      urban: "city",
      street: "street",
      beach: "beach",
      ocean: "water",
      sea: "water",
      office: "office",
      workspace: "office",
      business: "business",
      sport: "sports",
      fitness: "gym",
      workout: "gym",
      music: "music",
      sound: "music",
      travel: "travel",
      vacation: "travel",
      wedding: "wedding",
      party: "party",
      celebration: "party",
      winter: "winter",
      snow: "winter",
      vintage: "vintage",
      retro: "vintage",
      space: "space",
      astronomy: "space",
      kitchen: "kitchen",
      cooking: "kitchen",
      house: "house",
      home: "house",
      interior: "interior",
      room: "interior",
      library: "library",
      book: "library",
      school: "school",
      education: "school",
      restaurant: "restaurant",
      dining: "restaurant",
      coffee: "coffee",
      cafe: "coffee",
      fashion: "fashion",
      style: "fashion",
      health: "health",
      medical: "health",
      forest: "forest",
      trees: "forest",
      dark: "dark",
      night: "dark",
      ice: "ice",
      frozen: "ice",
    };

    return categoryMap[queryLower] || "abstract";
  };

  const fetchImages = async (searchQuery = "", pageNum = 1, append = false) => {
    // Don't fetch anything if no search query is provided
    if (!searchQuery || searchQuery.trim() === "") {
      setImages([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const category = getCategoryFromQuery(searchQuery);
      const imagesPerPage = 12;

      // Generate multiple images from the category
      const imagePromises = [];

      for (let i = 0; i < imagesPerPage; i++) {
        const imageId = (pageNum - 1) * imagesPerPage + i + 1;
        const imageUrl = `${STATIC_PHOTOS_BASE}/${category}/800x1000/${imageId}.webp`;
        const thumbnailUrl = `${STATIC_PHOTOS_BASE}/${category}/400x500/${imageId}.webp`;

        // Create a promise to check if image exists
        imagePromises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                id: `${category}-${imageId}-${searchQuery.replace(
                  /\s+/g,
                  "-"
                )}`,
                title: generateAITitle(searchQuery, i),
                category: getSearchCategory(searchQuery),
                resolution: getRandomResolution(),
                likes: Math.floor(Math.random() * 5000) + 100,
                downloads: Math.floor(Math.random() * 2000) + 50,
                aiModel: getRandomAIModel(),
                imageUrl: imageUrl,
                thumbnailUrl: thumbnailUrl,
                description: generateAIDescription(searchQuery),
                author: `Static Photos - ${category}`,
                authorUrl: `https://static.photos`,
                originalWidth: 800,
                originalHeight: 1000,
                searchQuery: searchQuery,
              });
            };
            img.onerror = () => {
              // If image doesn't exist, try with a fallback ID
              const fallbackId = (i % 10) + 1;
              const fallbackUrl = `${STATIC_PHOTOS_BASE}/${category}/800x1000/${fallbackId}.webp`;
              const fallbackThumbUrl = `${STATIC_PHOTOS_BASE}/${category}/400x500/${fallbackId}.webp`;

              resolve({
                id: `${category}-${fallbackId}-${searchQuery.replace(
                  /\s+/g,
                  "-"
                )}`,
                title: generateAITitle(searchQuery, i),
                category: getSearchCategory(searchQuery),
                resolution: getRandomResolution(),
                likes: Math.floor(Math.random() * 5000) + 100,
                downloads: Math.floor(Math.random() * 2000) + 50,
                aiModel: getRandomAIModel(),
                imageUrl: fallbackUrl,
                thumbnailUrl: fallbackThumbUrl,
                description: generateAIDescription(searchQuery),
                author: `Static Photos - ${category}`,
                authorUrl: `https://static.photos`,
                originalWidth: 800,
                originalHeight: 1000,
                searchQuery: searchQuery,
              });
            };
            img.src = imageUrl;
          })
        );
      }

      const transformedImages = await Promise.all(imagePromises);

      if (append) {
        setImages((prev) => [...prev, ...transformedImages]);
      } else {
        setImages(transformedImages);
      }

      setHasMore(transformedImages.length === imagesPerPage);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  // Helper functions to simulate AI-related metadata
  const generateAITitle = (query, index) => {
    const aiTerms = {
      "ai art": [
        "Neural Dreams",
        "Digital Consciousness",
        "Algorithmic Vision",
        "Synthetic Reality",
      ],
      abstract: [
        "Quantum Patterns",
        "Digital Fragments",
        "Algorithmic Abstractions",
        "Neural Networks",
      ],
      portraits: [
        "AI Portraits",
        "Digital Humans",
        "Synthetic Faces",
        "Generated Personas",
      ],
      landscapes: [
        "Virtual Worlds",
        "Digital Landscapes",
        "AI Environments",
        "Synthetic Nature",
      ],
      "digital art": [
        "Pixel Dreams",
        "Code Paintings",
        "Digital Masterpiece",
        "AI Creations",
      ],
      car: [
        "AI Sports Car",
        "Digital Vehicle",
        "Synthetic Automobile",
        "Neural Car Design",
      ],
      cars: [
        "AI Car Collection",
        "Digital Vehicles",
        "Automotive Dreams",
        "Generated Cars",
      ],
      nature: [
        "AI Nature Scene",
        "Digital Wilderness",
        "Synthetic Outdoors",
        "Natural AI Art",
      ],
      architecture: [
        "AI Building Design",
        "Digital Architecture",
        "Synthetic Structures",
        "Neural Buildings",
      ],
      food: [
        "AI Culinary Art",
        "Digital Food Design",
        "Synthetic Cuisine",
        "Generated Dishes",
      ],
      technology: [
        "AI Tech Concept",
        "Digital Innovation",
        "Synthetic Technology",
        "Neural Tech Design",
      ],
    };

    const relevantTerms = aiTerms[query.toLowerCase()] || [
      `AI Generated ${query}`,
      `Digital ${query}`,
      `Synthetic ${query}`,
      `Neural ${query}`,
    ];
    return relevantTerms[index % relevantTerms.length] + ` #${index + 1}`;
  };

  const generateAIDescription = (query) => {
    const descriptions = {
      "ai art":
        "Stunning AI-generated artwork created using advanced neural networks",
      abstract:
        "Abstract digital art generated through machine learning algorithms",
      portraits:
        "AI-generated portrait showcasing the latest in synthetic media technology",
      landscapes:
        "Beautiful landscape created using artificial intelligence and deep learning",
      "digital art":
        "Digital masterpiece crafted by artificial intelligence systems",
      car: "AI-generated automotive imagery with stunning detail",
      nature: "Beautiful natural scenes created with artificial intelligence",
      architecture: "Architectural marvels designed by AI systems",
      food: "Delicious culinary creations visualized through AI",
      technology: "Futuristic tech concepts brought to life by AI",
    };

    return (
      descriptions[query.toLowerCase()] ||
      `AI-generated ${query} artwork created with cutting-edge technology`
    );
  };

  const getSearchCategory = (query) => {
    const categoryMap = {
      "ai art": "Digital Art",
      abstract: "Abstract",
      portraits: "Portraits",
      landscapes: "Landscapes",
      "digital art": "Digital Art",
      car: "Transportation",
      cars: "Transportation",
      nature: "Nature",
      architecture: "Architecture",
      food: "Food & Drink",
      technology: "Technology",
      tech: "Technology",
      futuristic: "Sci-Fi",
      conceptual: "Conceptual",
    };

    return categoryMap[query.toLowerCase()] || "Digital Art";
  };

  const getRandomResolution = () => {
    const resolutions = ["4K", "6K", "8K", "2K", "HD"];
    return resolutions[Math.floor(Math.random() * resolutions.length)];
  };

  const getRandomAIModel = () => {
    const models = [
      "DALL-E 3",
      "Midjourney",
      "Stable Diffusion",
      "Claude 3 Vision",
      "Firefly",
    ];
    return models[Math.floor(Math.random() * models.length)];
  };

  useEffect(() => {
    // Only fetch images if there's a search query
    if (query && query.trim() !== "") {
      fetchImages(query, 1, false);
    } else {
      // Clear images if no query
      setImages([]);
      setLoading(false);
    }
  }, [query]);

  const loadMore = () => {
    if (!loading && hasMore && query && query.trim() !== "") {
      fetchImages(query, Math.floor(images.length / 12) + 1, true);
    }
  };

  return {
    images,
    loading,
    error,
    hasMore,
    loadMore,
    refetch: () => {
      if (query && query.trim() !== "") {
        fetchImages(query, 1, false);
      }
    },
  };
};
