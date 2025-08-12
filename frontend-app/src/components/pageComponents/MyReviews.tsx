import React from "react";
import { Star } from "lucide-react";

// You can fetch real data here later
const reviews = [
  {
    id: 1,
    game: "Cyberpunk 2077 Account",
    rating: 5,
    comment: "Excellent seller, fast delivery and account was as described!",
  },
  {
    id: 2,
    game: "Valorant Points",
    rating: 4,
    comment: "Good price, but took a little while to get the code.",
  },
];

export default function MyReviews() {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="p-4 rounded-lg bg-gaming-bg-card border border-gaming-border"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-gaming-text-primary">
              {review.game}
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating
                      ? "text-gaming-gold fill-current"
                      : "text-gaming-text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-gaming-text-secondary italic">
            "{review.comment}"
          </p>
        </div>
      ))}
    </div>
  );
}
