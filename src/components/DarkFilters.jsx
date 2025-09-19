import React, { useState } from "react";

const DarkFilters = () => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    aiModel: true,
    resolution: false,
    style: false,
    license: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterSection = ({ title, icon, sectionKey, children }) => (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left group"
      >
        <div className="flex items-center space-x-3">
          <span className="text-cyan-400">{icon}</span>
          <span className="font-medium text-gray-200 group-hover:text-cyan-400 transition-colors">
            {title}
          </span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            expandedSections[sectionKey] ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-4 space-y-3 pl-7">{children}</div>
      )}
    </div>
  );

  const CheckboxItem = ({ label, count, isNew = false, gradient = false }) => (
    <label className="flex items-center justify-between cursor-pointer group">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="rounded border-gray-600 bg-gray-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-gray-800"
        />
        <span
          className={`text-sm transition-colors ${
            gradient
              ? "bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              : "text-gray-300 group-hover:text-cyan-400"
          }`}
        >
          {label}
        </span>
        {isNew && (
          <span className="text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-0.5 rounded-full">
            New
          </span>
        )}
      </div>
      {count && <span className="text-xs text-gray-500">({count})</span>}
    </label>
  );

  return (
    <div className="w-72 bg-gray-800 border-r border-gray-700 h-full overflow-y-auto">
      <div className="p-6">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Filters
          </h2>
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        {/* Category Filter */}
        <FilterSection title="Category" icon="🎨" sectionKey="category">
          <CheckboxItem label="Digital Art" count="2.3M" />
          <CheckboxItem label="Portraits" count="1.8M" />
          <CheckboxItem label="Landscapes" count="1.2M" />
          <CheckboxItem label="Abstract" count="987K" />
          <CheckboxItem label="Fashion" count="654K" />
          <CheckboxItem label="Science" count="432K" />
          <CheckboxItem label="Conceptual" count="345K" />
        </FilterSection>

        {/* AI Model Filter */}
        <FilterSection title="AI Model" icon="🤖" sectionKey="aiModel">
          <CheckboxItem label="DALL-E 3" count="3.2M" gradient />
          <CheckboxItem label="Midjourney v6" count="2.8M" isNew gradient />
          <CheckboxItem label="Stable Diffusion XL" count="2.1M" gradient />
          <CheckboxItem label="Claude 3 Vision" count="890K" isNew gradient />
          <CheckboxItem label="Firefly" count="567K" gradient />
        </FilterSection>

        {/* Resolution Filter */}
        <FilterSection title="Resolution" icon="📐" sectionKey="resolution">
          <CheckboxItem label="8K (7680×4320)" count="234K" />
          <CheckboxItem label="6K (6144×3456)" count="567K" />
          <CheckboxItem label="4K (3840×2160)" count="1.2M" />
          <CheckboxItem label="2K (2048×1152)" count="890K" />
          <CheckboxItem label="HD (1920×1080)" count="2.3M" />
        </FilterSection>

        {/* Style Filter */}
        <FilterSection title="Style" icon="✨" sectionKey="style">
          <CheckboxItem label="Photorealistic" count="1.8M" />
          <CheckboxItem label="Artistic" count="1.5M" />
          <CheckboxItem label="Minimalist" count="945K" />
          <CheckboxItem label="Cyberpunk" count="734K" />
          <CheckboxItem label="Surreal" count="623K" />
          <CheckboxItem label="Vintage" count="456K" />
        </FilterSection>

        {/* License Filter */}
        <FilterSection title="License" icon="📋" sectionKey="license">
          <CheckboxItem label="Free for Commercial Use" count="2.1M" />
          <CheckboxItem label="Attribution Required" count="1.8M" />
          <CheckboxItem label="Premium" count="567K" />
          <CheckboxItem label="Exclusive" count="123K" />
        </FilterSection>

        {/* Apply Filters Button */}
        <div className="mt-8">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
            Apply Filters
          </button>
        </div>

        {/* Clear Filters */}
        <div className="mt-4">
          <button className="w-full text-gray-400 hover:text-cyan-400 py-2 text-sm transition-colors">
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default DarkFilters;
