import React, { useState } from "react";
import DarkHeader from "./components/DarkHeader";
import DarkHero from "./components/DarkHero";
import ImageGrid from "./components/ImageGrid";
import DarkFilters from "./components/DarkFilters";

function DarkApp() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <DarkHeader />

      {/* Hero Section */}
      <DarkHero onSearch={handleSearch} />

      {/* Main Content Area */}
      <div className="flex min-h-screen">
        {/* Sidebar Filters */}
        <DarkFilters />

        {/* Image Grid */}
        <div className="flex-1">
          <ImageGrid searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}

export default DarkApp;
