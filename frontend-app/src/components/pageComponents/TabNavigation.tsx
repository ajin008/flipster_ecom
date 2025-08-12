"use client";
import React, { useState } from "react";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

import MyFavorites from "./MyFavorites";
import MyReviews from "./MyReviews";
import MyPurchases from "./MyPurchases";

type TabID = "favorites" | "reviews" | "purchases";

const tabs = [
  { id: "favorites" as TabID, label: "My Favorites", icon: Heart },
  { id: "reviews" as TabID, label: "My Reviews", icon: Star },
  { id: "purchases" as TabID, label: "My Purchases", icon: ShoppingBag },
];

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState<TabID>("favorites");

  // NEW: Log the state on every render
  console.log(`Component is rendering. Current activeTab is: "${activeTab}"`);

  return (
    <div className="w-full my-6 md:my-8">
      <div className="border-b border-gaming-border">
        <nav className="flex -mb-px" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  // NEW: Log which tab was clicked
                  console.log(
                    `Tab clicked! Setting active tab to: "${tab.id}"`
                  );
                  setActiveTab(tab.id);
                }}
                className={cn(
                  "group inline-flex items-center justify-center gap-2 py-4 px-1 w-1/3 border-b-2 font-medium text-sm transition-all duration-200",
                  isActive
                    ? "border-gaming-purple text-gaming-purple"
                    : "border-transparent text-gaming-text-secondary hover:text-gaming-text-primary hover:border-gaming-border-light"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-transform",
                    isActive ? "scale-110" : "group-hover:scale-105"
                  )}
                />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="py-6">
        {activeTab === "favorites" && <MyFavorites />}
        {activeTab === "reviews" && <MyReviews />}
        {activeTab === "purchases" && <MyPurchases />}
      </div>
    </div>
  );
}
