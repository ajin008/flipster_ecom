import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Loading Component
export const StoreOverviewLoading = () => {
  return (
    <div className="space-y-4">
      {/* Hero Section Skeleton */}
      <Card className="border-gaming-border bg-gradient-card backdrop-blur-gaming overflow-hidden shadow-gaming-lg">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <CardContent className="relative p-4 md:p-6">
          <div className="space-y-4">
            {/* Profile Section Skeleton */}
            <div className="flex items-center gap-3">
              {/* Avatar Skeleton */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gaming-text-muted/20 rounded-full animate-pulse"></div>

              <div className="flex-1 min-w-0 space-y-2">
                {/* Store Name & Badge */}
                <div className="flex items-center gap-2">
                  <div className="h-5 bg-gaming-text-muted/20 rounded animate-pulse w-32"></div>
                  <div className="h-5 bg-gaming-text-muted/20 rounded animate-pulse w-12"></div>
                </div>

                {/* Rating & Views */}
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gaming-text-muted/20 rounded animate-pulse w-24"></div>
                  <div className="h-4 bg-gaming-text-muted/20 rounded animate-pulse w-20"></div>
                </div>

                {/* Join Date */}
                <div className="h-3 bg-gaming-text-muted/20 rounded animate-pulse w-28"></div>
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-10 bg-gaming-text-muted/20 rounded-lg animate-pulse"></div>
              <div className="h-10 bg-gaming-text-muted/20 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card
            key={index}
            className="border-gaming-border bg-gaming-bg-card/50 backdrop-blur-gaming"
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                {/* Icon Skeleton */}
                <div className="w-8 h-8 bg-gaming-text-muted/20 rounded-lg animate-pulse"></div>

                <div className="flex-1 min-w-0 space-y-2">
                  {/* Value Skeleton */}
                  <div className="h-5 bg-gaming-text-muted/20 rounded animate-pulse w-12"></div>
                  {/* Label Skeleton */}
                  <div className="h-3 bg-gaming-text-muted/20 rounded animate-pulse w-16"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
