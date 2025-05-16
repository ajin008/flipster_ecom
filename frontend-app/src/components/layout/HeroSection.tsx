"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

type Banner = {
  id: number;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: string;
  bgColor?: string;
};

type PromotionalOffer = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const defaultBanners: Banner[] = [
  {
    id: 1,
    title: "Epic Account Sale!",
    description:
      "Get up to 50% off on top-tier game accounts. Limited time offer!",
    cta: "Shop Now",
    ctaLink: "/collections/game-accounts",
    image: "/b1.jpg",
    bgColor: "var(--color-bg-primary)",
  },
  {
    id: 2,
    title: "Rare Skins & Items",
    description:
      "Unlock exclusive skins and in-game items for your favorite games.",
    cta: "Explore",
    ctaLink: "/collections/rare-items",
    image: "/b2.jpg",
    bgColor: "var(--color-muted)",
  },
  {
    id: 3,
    title: "Level Up Fast",
    description: "Buy high-ranked accounts and dominate the leaderboards!",
    cta: "View Deals",
    ctaLink: "/collections/high-ranked-accounts",
    image: "/b3.jpg",
    bgColor: "var(--color-accent-muted)",
  },
];

type HeroSectionProps = {
  banners?: Banner[];
  promotionalOffers?: PromotionalOffer[];
};

export default function HeroSection({
  banners = defaultBanners,
  promotionalOffers = [],
}: HeroSectionProps) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleManualChange = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentBanner(index);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextBanner = () =>
    handleManualChange((currentBanner + 1) % banners.length);

  const prevBanner = () =>
    handleManualChange((currentBanner - 1 + banners.length) % banners.length);

  return (
    <div className="w-full bg-bg-primary rounded-sm">
      {/* Add padding OUTSIDE the relative container */}
      <div className="px-4 py-2">
        <div className="relative h-[280px] sm:h-96 md:h-[500px] w-full overflow-hidden rounded-sm">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentBanner * 100}%)`,
              width: `${banners.length * 100}%`,
            }}
          >
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className="relative flex h-full w-full shrink-0"
                style={{ width: `${100 / banners.length}%` }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={banner.image}
                    alt={`Banner background ${banner.title}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent w-full h-full" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center w-full h-full px-4 md:px-12">
                  <div className="w-full md:w-1/2 pt-8 md:pt-0 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                      {banner.title}
                    </h1>
                    <p className="text-lg mb-6 text-white/90">
                      {banner.description}
                    </p>
                    <a
                      href={banner.ctaLink}
                      className="inline-flex items-center px-6 py-3 rounded bg-accent text-white hover:bg-accent-muted transition-colors"
                    >
                      {banner.cta}
                      <ShoppingBag className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  <div className="w-full md:w-1/2 h-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevBanner}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-20 transition-colors"
            aria-label="Previous banner"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextBanner}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-20 transition-colors"
            aria-label="Next banner"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualChange(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentBanner === index
                    ? "bg-accent"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Offers */}
      {promotionalOffers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-8 bg-muted">
          {promotionalOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
            >
              <div className="mr-4 p-3 rounded-full bg-accent/20 text-accent">
                {offer.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{offer.title}</h3>
                <p className="text-sm text-text-primary/70">
                  {offer.description}
                </p>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-accent" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
