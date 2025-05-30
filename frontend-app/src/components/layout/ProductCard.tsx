import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import {
  GameAccount,
  getTopPicks,
  getActionGames,
  getSportsGames,
} from "../../lib/utils/gameData";

const SingleProductCard = ({ product }: { product: GameAccount }) => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-40">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={160}
          className="w-full h-full object-cover"
          unoptimized
        />
        {product.verificationStatus && (
          <div className="absolute top-2 right-2 bg-green-600/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <CheckCircle size={12} />
            Verified
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {product.views.toLocaleString()} views
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-foreground line-clamp-1 text-sm">
            {product.name}
          </h3>
        </div>

        <p className="text-muted-foreground text-xs line-clamp-2 mb-2">
          {product.shortDescription}
        </p>

        <div className="text-xs text-accent font-medium mb-3">
          {product.game}
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="bg-secondary px-2 py-1 rounded text-xs text-secondary-foreground">
                Lvl {product.level}
              </span>
              <span className="text-xs text-muted-foreground">
                {product.region}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-lg text-foreground">
              ₹{product.price.toFixed(2)}
            </div>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
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
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
        {showViewMore && (
          <button className="text-accent text-sm hover:underline">
            View more
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <SingleProductCard key={product.id} product={product} />
        ))}
      </div>
      {!showViewMore && products.length > 4 && (
        <div className="flex justify-end mt-4">
          <button className="text-accent text-sm hover:underline">
            View more
          </button>
        </div>
      )}
    </div>
  );
};

export default function ProductCardGrid() {
  // Get data from the simplified gameData.ts
  const topPicks = getTopPicks(6);
  const actionGames = getActionGames(8);
  const sportsGames = getSportsGames(8);

  return (
    <div className="container mx-auto px-4 py-8  min-h-screen">
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
