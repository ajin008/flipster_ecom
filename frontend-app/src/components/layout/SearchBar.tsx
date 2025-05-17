"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (): void => {
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="relative">
        <div
          className="
          flex items-center justify-between w-full rounded-full
          bg-background/20 backdrop-blur-sm
          border border-white/10
          shadow-lg overflow-hidden
        "
        >
          <input
            type="text"
            placeholder="Search by games, items etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="
              w-full py-3 pl-6 pr-4 bg-transparent
              text-foreground/90 placeholder:text-foreground/50
              focus:outline-none
            "
          />

          <div className="pr-2">
            <button
              onClick={handleSearch}
              type="button"
              className="
                h-10 w-10 rounded-full
                bg-primary hover:bg-primary/90
                text-primary-foreground
                transition-colors duration-200
                flex items-center justify-center
              "
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
