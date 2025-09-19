import React, { useState } from "react";

const Filters = () => {
  const [expandedSections, setExpandedSections] = useState({
    assetType: true,
    license: false,
    aiGenerated: false,
    color: false,
    people: false,
    fileType: false,
    orientation: false,
    style: false,
    quickEdit: false,
    freepikChoice: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const FilterSection = ({ title, icon, sectionKey, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{icon}</span>
          <span className="font-medium text-gray-900">{title}</span>
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
        <div className="mt-3 space-y-2">{children}</div>
      )}
    </div>
  );

  const CheckboxItem = ({ label, count, isNew = false }) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
      />
      <span className="text-sm text-gray-700">{label}</span>
      {count && <span className="text-xs text-gray-500">({count})</span>}
      {isNew && (
        <span className="text-xs bg-green-100 text-green-800 px-1 rounded">
          New
        </span>
      )}
    </label>
  );

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 flex items-center">
            🔧 Filters
          </h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">
            +
          </button>
        </div>

        {/* Asset Type */}
        <FilterSection title="Asset type" icon="📁" sectionKey="assetType">
          <CheckboxItem label="Vectors" />
          <CheckboxItem label="Photos" />
          <CheckboxItem label="AI images" isNew />
          <CheckboxItem label="Icons" isNew />
          <CheckboxItem label="Videos" />
          <CheckboxItem label="PSD" />
        </FilterSection>

        {/* License */}
        <FilterSection title="License" icon="📋" sectionKey="license">
          <CheckboxItem label="Free" />
          <CheckboxItem label="Premium" />
        </FilterSection>

        {/* AI-generated */}
        <FilterSection title="AI-generated" icon="🤖" sectionKey="aiGenerated">
          <CheckboxItem label="Yes" />
          <CheckboxItem label="No" />
        </FilterSection>

        {/* Color */}
        <FilterSection title="Color" icon="🎨" sectionKey="color">
          <div className="grid grid-cols-6 gap-2">
            {[
              "#000000",
              "#ffffff",
              "#ff0000",
              "#00ff00",
              "#0000ff",
              "#ffff00",
            ].map((color, index) => (
              <button
                key={index}
                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-400"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </FilterSection>

        {/* People */}
        <FilterSection title="People" icon="👥" sectionKey="people">
          <CheckboxItem label="With people" />
          <CheckboxItem label="Without people" />
        </FilterSection>

        {/* File type */}
        <FilterSection title="File type" icon="📄" sectionKey="fileType">
          <CheckboxItem label="JPG" />
          <CheckboxItem label="PNG" />
          <CheckboxItem label="SVG" />
          <CheckboxItem label="EPS" />
        </FilterSection>

        {/* Orientation */}
        <FilterSection title="Orientation" icon="📐" sectionKey="orientation">
          <CheckboxItem label="Horizontal" />
          <CheckboxItem label="Vertical" />
          <CheckboxItem label="Square" />
        </FilterSection>

        {/* Style */}
        <FilterSection title="Style" icon="✨" sectionKey="style">
          <CheckboxItem label="Flat" />
          <CheckboxItem label="3D" />
          <CheckboxItem label="Realistic" />
        </FilterSection>

        {/* Quick edit */}
        <FilterSection title="Quick edit" icon="⚡" sectionKey="quickEdit">
          <CheckboxItem label="Available" />
        </FilterSection>

        {/* Freepik's Choice */}
        <FilterSection
          title="Freepik's Choice"
          icon="⭐"
          sectionKey="freepikChoice"
        >
          <CheckboxItem label="Yes" />
        </FilterSection>
      </div>
    </div>
  );
};

export default Filters;
