"use client";
import React, { useState } from "react";
import { ShoppingCart, Store } from "lucide-react";

const BuyerSellerToggle = () => {
  const [activeMode, setActiveMode] = useState<"buyer" | "seller">("buyer");

  const handleToggle = (mode: "buyer" | "seller") => {
    if (mode !== activeMode) {
      setActiveMode(mode);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative bg-gaming-cardBg rounded-lg border border-gaming-purple/20 p-px flex">
        {/* Background slider - exact width calculation */}
        <div
          className={`absolute top-px bottom-px left-px w-[calc(50%-1px)] bg-amber-400 rounded-md transition-transform duration-200 ease-in-out ${
            activeMode === "seller"
              ? "translate-x-[calc(100%+2px)]"
              : "translate-x-0"
          }`}
        />

        {/* Buyer Button - exact width matching */}
        <button
          type="button"
          onClick={() => handleToggle("buyer")}
          aria-pressed={activeMode === "buyer"}
          className={`relative z-10 flex items-center justify-center w-[72px] h-8 ${
            activeMode === "buyer" ? "text-white" : "text-gaming-textSecondary"
          }`}
        >
          <div className="flex items-center gap-1">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="text-xs">Buy</span>
          </div>
        </button>

        {/* Seller Button - exact width matching */}
        <button
          type="button"
          onClick={() => handleToggle("seller")}
          aria-pressed={activeMode === "seller"}
          className={`relative z-10 flex items-center justify-center w-[72px] h-8 ${
            activeMode === "seller" ? "text-white" : "text-gaming-textSecondary"
          }`}
        >
          <div className="flex items-center gap-1">
            <Store className="w-3.5 h-3.5" />
            <span className="text-xs">Sell</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BuyerSellerToggle;
