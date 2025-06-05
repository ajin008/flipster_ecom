"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { urlFor } from "@/lib/sanity";

type Banner = {
  _id: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: string;
  bgColor?: string;
};

type Props = {
  banners: Banner[];
};

export default function BannerSlider({ banners }: Props) {
  const [currentBanner, setCurrentBanner] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (banners.length === 0) return;
    timeoutRef.current = setTimeout(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentBanner, banners]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleManualChange = (index: number) => {
    setCurrentBanner(index);
  };

  return (
    <div className="relative h-[280px] sm:h-46 md:h-[300px] w-full overflow-hidden rounded-sm">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentBanner * 100}%)`,
          width: `${banners.length * 100}%`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner._id}
            className="relative flex h-full w-full shrink-0"
            style={{ width: `${100 / banners.length}%` }}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={urlFor(banner.image).url()}
                alt={`Banner ${banner.title}`}
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

      {/* Arrows */}
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

      {/* Dots */}
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
  );
}
