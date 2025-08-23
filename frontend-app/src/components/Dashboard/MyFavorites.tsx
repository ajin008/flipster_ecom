import React from "react";
import { Heart, Frown } from "lucide-react";

// You can fetch real data here later
const favoriteItems = [
  { id: 1, name: "Legendary Dragon Blade", game: "Mythic Quest", price: 150 },
  { id: 2, name: "Pro Apex Account (S20)", game: "Apex Legends", price: 250 },
];

export default function MyFavorites() {
  if (favoriteItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg bg-gaming-bg-card border border-gaming-border">
        <Frown className="w-16 h-16 text-gaming-text-muted mb-4" />
        <h3 className="text-xl font-bold text-gaming-text-primary">
          No Favorites Yet
        </h3>
        <p className="text-gaming-text-secondary mt-2">
          Click the heart icon on items you like to save them here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {favoriteItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center p-4 rounded-lg bg-gaming-bg-card border border-gaming-border hover:border-gaming-pink/50 transition-colors"
        >
          <div className="p-3 bg-gaming-pink/10 rounded-lg mr-4">
            <Heart className="w-6 h-6 text-gaming-pink" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gaming-text-primary">
              {item.name}
            </p>
            <p className="text-sm text-gaming-text-secondary">{item.game}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg text-gaming-gold">₹{item.price}</p>
            <p className="text-xs text-gaming-text-muted">Current Price</p>
          </div>
        </div>
      ))}
    </div>
  );
}
