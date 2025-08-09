"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function MyListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleNewListingBtn = () => {
    router.push("selling");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gaming-bg">
      {/* Mobile-First Header */}
      <header className="sticky top-0 z-50 bg-gaming-bg-card/95 backdrop-blur-sm border-b border-gaming-border">
        <div className="px-3 py-4 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between md:hidden">
              <div>
                <h1 className="text-xl font-bold text-gaming-text-primary truncate">
                  My Listings
                </h1>
                <p className="text-xs text-gaming-text-secondary">
                  Manage your listings
                </p>
              </div>
              <button
                className="px-3 py-2 bg-gaming-purple hover:bg-gaming-purple-light text-white text-sm font-medium rounded-lg transition-colors shadow-sm"
                onClick={handleNewListingBtn}
              >
                + New
              </button>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gaming-text-primary">
                    My Listings
                  </h1>
                  <p className="text-gaming-text-secondary text-sm lg:text-base">
                    Manage your game account listings
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gaming-purple/20 hover:bg-gaming-purple/30 text-gaming-purple-light border border-gaming-purple/30 rounded-lg transition-all duration-200">
                  Filter
                </button>
                <button
                  className="px-6 py-2 bg-gaming-purple hover:bg-gaming-purple-light text-white rounded-lg transition-all duration-200 shadow-gaming-md hover:shadow-gaming-lg"
                  onClick={handleNewListingBtn}
                >
                  + New Listing
                </button>
              </div>
            </div>

            {/* Mobile Filter Bar */}
            <div className="mt-3 md:hidden">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <button className="flex-shrink-0 px-3 py-1.5 bg-gaming-purple/20 hover:bg-gaming-purple/30 text-gaming-purple-light border border-gaming-purple/30 rounded-md text-sm transition-colors">
                  All
                </button>
                <button className="flex-shrink-0 px-3 py-1.5 bg-gaming-bg-card hover:bg-gaming-border text-gaming-text-secondary border border-gaming-border rounded-md text-sm transition-colors whitespace-nowrap">
                  Active
                </button>
                <button className="flex-shrink-0 px-3 py-1.5 bg-gaming-bg-card hover:bg-gaming-border text-gaming-text-secondary border border-gaming-border rounded-md text-sm transition-colors whitespace-nowrap">
                  Sold
                </button>
                <button className="flex-shrink-0 px-3 py-1.5 bg-gaming-bg-card hover:bg-gaming-border text-gaming-text-secondary border border-gaming-border rounded-md text-sm transition-colors whitespace-nowrap">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-3 py-4 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>

      {/* Mobile-First Footer */}
      <footer className="mt-auto bg-gaming-bg-card/50 border-t border-gaming-border">
        <div className="px-3 py-4 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-gaming-text-secondary text-xs sm:text-sm">
              <p>© 2025 Gaming Marketplace. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
