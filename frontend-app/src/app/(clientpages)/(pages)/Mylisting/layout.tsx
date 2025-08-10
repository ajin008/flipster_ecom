"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MyListingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleNewListingBtn = () => {
    router.push("selling");
  };

  const handleBackBtn = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gaming-bg">
      {/* Mobile-First Header */}
      <header className="sticky top-0 z-50 bg-gaming-bg-card/95 backdrop-blur-sm border-b border-gaming-border">
        <div className="px-3 py-4 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between md:hidden">
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleBackBtn}
                  className="shrink-0"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-gaming-text-primary truncate">
                    My Listings
                  </h1>
                  <p className="text-xs text-gaming-text-secondary">
                    Manage your listings
                  </p>
                </div>
              </div>
              <Button variant="gaming" onClick={handleNewListingBtn}>
                + New Listing
              </Button>
            </div>

            {/* Desktop Header */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleBackBtn}
                  className="shrink-0"
                >
                  <ArrowLeft className="h-8 w-8" />
                </Button>
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
                <Button variant="gaming" onClick={handleNewListingBtn}>
                  + New Listing
                </Button>
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
