import React from "react";

// Define the product type based on your data
type GameAccount = {
  id: string;
  name: string;
  shortDescription: string;
  views: number;
  price: number;
  createdAt: string;
  category: string;
  game: string;
  imageUrl: string;
  region: string;
  level: number;
};

// Sample data (using the provided data temporarily)
const mobileGameAccounts = [
  // MOBA Category
  {
    id: "moba001",
    name: "Mythic Glory Mobile Legends Account",
    shortDescription:
      "Mythic Glory 1200+ points, 100+ skins including Legend Zodiac",
    views: 3245,
    price: 299.99,
    createdAt: "2023-08-12T09:15:00Z",
    category: "MOBA",
    game: "Mobile Legends: Bang Bang",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "SEA",
    level: 120,
  },
  {
    id: "moba002",
    name: "AOV Challenger Account",
    shortDescription:
      "Arena of Valor Challenger rank, all heroes unlocked, 5 SS skins",
    views: 1872,
    price: 249.5,
    createdAt: "2023-10-05T14:30:00Z",
    category: "MOBA",
    game: "Arena of Valor",
    imageUrl:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=600&auto=format",
    region: "NA",
    level: 95,
  },

  // Battle Royale Category
  {
    id: "br001",
    name: "Conqueror PUBG Mobile Account",
    shortDescription:
      "Season 15-18 Conqueror, Ace Dominator frame, 30 legendary outfits",
    views: 4210,
    price: 399.99,
    createdAt: "2023-06-18T11:20:00Z",
    category: "Battle Royale",
    game: "PUBG Mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&auto=format",
    region: "Global",
    level: 70,
  },
  {
    id: "br002",
    name: "Unicorn FF Max Account",
    shortDescription:
      "Free Fire MAX account with Unicorn bundle, 50+ gun skins, Level 70",
    views: 2953,
    price: 199.99,
    createdAt: "2023-09-30T16:45:00Z",
    category: "Battle Royale",
    game: "Garena Free Fire",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "LATAM",
    level: 65,
  },

  // RPG Category
  {
    id: "rpg001",
    name: "AR 60 Genshin Impact Account",
    shortDescription: "AR 60 with C6 Hu Tao + Staff of Homa, 20+ 5★ characters",
    views: 5380,
    price: 899.99,
    createdAt: "2023-04-22T10:10:00Z",
    category: "RPG",
    game: "Genshin Impact",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "Asia",
    level: 60,
  },
  {
    id: "rpg002",
    name: "Endgame Honkai Star Rail Account",
    shortDescription:
      "TL 65 with Seele+Light Cone, 8 limited 5★ characters, all content cleared",
    views: 3124,
    price: 549.99,
    createdAt: "2023-11-15T13:25:00Z",
    category: "RPG",
    game: "Honkai: Star Rail",
    imageUrl:
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&auto=format",
    region: "America",
    level: 65,
  },
];

// For demo purposes, let's categorize them differently
const topPicks = mobileGameAccounts.slice(0, 2);
const action = mobileGameAccounts.filter(
  (account) => account.category === "Battle Royale"
);
const sports = mobileGameAccounts.filter(
  (account) => account.category === "RPG"
); // Using RPG as "sports" for demo

const SingleProductCard = ({ product }: { product: GameAccount }) => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-40">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-accent/90 text-accent-foreground px-2 py-1 rounded text-xs font-medium">
          {product.category}
        </div>
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
        <p className="text-muted-foreground text-xs line-clamp-2 mb-3">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-secondary px-2 py-1 rounded text-xs">
              Lvl {product.level}
            </span>
            <span className="text-xs text-muted-foreground">
              {product.region}
            </span>
          </div>
          <div className="font-bold text-accent">
            ₹{product.price.toFixed(2)}
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
      {!showViewMore && (
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
  return (
    <div className="container mx-auto px-4 py-8">
      <CategorySection title="Top Picks" products={topPicks} />
      <CategorySection title="Action Games" products={action} />
      <CategorySection title="Sports & RPG" products={sports} />
    </div>
  );
}
