"use client";
import React, { useRef, useState, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  GameAccount,
  getTopPicks,
  getActionGames,
  getSportsGames,
} from "../../lib/utils/gameData";

const SingleProductCard = ({ product }: { product: GameAccount }) => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full flex-shrink-0">
      <div className="relative h-32 sm:h-36 md:h-40">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={160}
          className="w-full h-full object-cover"
          unoptimized
        />
        {product.verificationStatus && (
          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-amber-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <CheckCircle size={10} className="sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">Verified</span>
            <span className="sm:hidden">✓</span>
          </div>
        )}
        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 bg-black/70 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs">
          {product.views > 1000
            ? `${(product.views / 1000).toFixed(1)}k`
            : product.views}{" "}
          views
        </div>
      </div>

      <div className="p-3 sm:p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-foreground line-clamp-1 text-sm sm:text-base">
            {product.name}
          </h3>
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-2">
          {product.shortDescription}
        </p>

        <div className="text-xs sm:text-sm text-accent font-medium mb-3">
          {product.game}
        </div>

        <div className="mt-auto space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="bg-secondary px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs text-secondary-foreground">
                Lvl {product.level}
              </span>
              <span className="text-xs text-muted-foreground">
                {product.region}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-base sm:text-lg text-foreground">
              ₹{product.price.toFixed(2)}
            </div>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-2 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({
  title,
  products,
  showViewMore = false,
}: {
  title: string;
  products: GameAccount[];
  showViewMore?: boolean;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardsPerRow, setCardsPerRow] = useState(4);

  // Update cards per row based on screen size
  useEffect(() => {
    const updateCardsPerRow = () => {
      if (window.innerWidth < 768) {
        setCardsPerRow(2); // Mobile: 2 cards per row
      } else {
        setCardsPerRow(4); // Desktop: 4 cards per row
      }
    };

    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      const resizeObserver = new ResizeObserver(checkScrollButtons);
      resizeObserver.observe(scrollContainer);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
        resizeObserver.disconnect();
      };
    }
  }, [cardsPerRow]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  // Calculate how many complete rows we can show
  const totalRows = Math.ceil(products.length / cardsPerRow);

  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex justify-between items-center mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-bold text-foreground">
          {title}
        </h2>
      </div>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 ${
            !canScrollLeft
              ? "opacity-50 cursor-not-allowed"
              : "opacity-0 group-hover:opacity-100"
          }`}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5 text-gray-700" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 ${
            !canScrollRight
              ? "opacity-50 cursor-not-allowed"
              : "opacity-0 group-hover:opacity-100"
          }`}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5 text-gray-700" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {Array.from({ length: totalRows }, (_, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`grid gap-3 sm:gap-4 w-full flex-shrink-0 ${
                cardsPerRow === 2 ? "grid-cols-2" : "grid-cols-4"
              }`}
            >
              {products
                .slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow)
                .map((product) => (
                  <SingleProductCard key={product.id} product={product} />
                ))}
            </div>
          ))}
        </div>
      </div>

      {showViewMore && (
        <div className="flex justify-end mt-3 sm:mt-4">
          <button className="text-accent text-sm hover:underline font-medium">
            View all {title.toLowerCase()} →
          </button>
        </div>
      )}
    </div>
  );
};

export default function ProductCardGrid() {
  // Get data from the simplified gameData.ts
  const topPicks = getTopPicks(12);
  const actionGames = getActionGames(16);
  const sportsGames = getSportsGames(16);

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 min-h-screen">
      {/* Add custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <CategorySection title="Top Picks" products={topPicks} />
      <CategorySection
        title="Action Games"
        products={actionGames}
        showViewMore
      />
      <CategorySection
        title="Sports Games"
        products={sportsGames}
        showViewMore
      />
    </div>
  );
}
