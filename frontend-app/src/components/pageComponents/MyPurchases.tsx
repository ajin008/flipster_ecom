import React from "react";
import { ShoppingBag } from "lucide-react";

// You can fetch real data here later
const purchases = [
  {
    id: 1,
    item: "Steam Account - 50 Games",
    date: "2025-08-10",
    status: "Completed",
  },
  {
    id: 2,
    item: "Rare Fortnite Skin Code",
    date: "2025-08-12",
    status: "Processing",
  },
];

export default function MyPurchases() {
  return (
    <div className="space-y-4">
      {purchases.map((purchase) => (
        <div
          key={purchase.id}
          className="flex items-center p-4 rounded-lg bg-gaming-bg-card border border-gaming-border"
        >
          <div className="p-3 bg-gaming-green/10 rounded-lg mr-4">
            <ShoppingBag className="w-6 h-6 text-gaming-green" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gaming-text-primary">
              {purchase.item}
            </p>
            <p className="text-sm text-gaming-text-secondary">
              Purchased on {new Date(purchase.date).toLocaleDateString()}
            </p>
          </div>
          <div
            className={`text-sm font-bold px-3 py-1 rounded-full ${
              purchase.status === "Completed"
                ? "bg-gaming-green/10 text-gaming-green"
                : "bg-gaming-blue/10 text-gaming-blue"
            }`}
          >
            {purchase.status}
          </div>
        </div>
      ))}
    </div>
  );
}
