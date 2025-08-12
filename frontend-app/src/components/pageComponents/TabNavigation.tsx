"use client";
import React, { useState } from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";
import MyFavorites from "./MyFavorites";
import MyReviews from "./MyReviews";
import MyPurchases from "./MyPurchases";

const tabs = [
  {
    id: "favorites",
    label: "My Favorites",
    shortLabel: "Favorites", // Short version for mobile
    icon: Heart,
    component: MyFavorites,
  },
  {
    id: "reviews",
    label: "My Reviews",
    shortLabel: "Reviews", // Short version for mobile
    icon: Star,
    component: MyReviews,
  },
  {
    id: "purchases",
    label: "My Purchases",
    shortLabel: "Purchases", // Short version for mobile
    icon: ShoppingBag,
    component: MyPurchases,
  },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("favorites");

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;

  return (
    <div className="w-full mt-3">
      {/* Tab Navigation Header */}
      <div className="border-b border-gaming-border mb-6">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4.5 sm:px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 relative ${
                  isActive
                    ? "text-amber-300 border-b-2 border-amber-300 bg-gaming-pink/5"
                    : "text-gaming-text-secondary hover:text-gaming-text-primary hover:bg-gaming-bg-card/50"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-gaming-pink" : ""}`}
                />
                {/* Show short labels on mobile, full labels on larger screens */}
                <span className="block sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}
