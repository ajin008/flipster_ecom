"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Banner } from "@/lib/types";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type Props = {
  banners: Banner[];
};

export default function BannerSlider({ banners }: Props) {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length, isPlaying]);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const goToPrevious = () => {
    setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const current = banners[index];

  return (
    <div className="relative group">
      {/* Main Banner Container */}
      <div
        className="relative h-[240px] sm:h-[280px] md:h-[360px] lg:h-[420px] w-full overflow-hidden rounded-2xl 
                      shadow-gaming-xl border border-gaming-purple/20"
      >
        {/* Banner Image - Enhanced with cropping and scaling */}
        <div className="relative w-full h-full">
          <Image
            src={current.image_url}
            alt={current.title}
            fill
            className="object-cover transition-all duration-700 hover:scale-110 
                      scale-125 -translate-y-8 -translate-x-4 sm:-translate-y-12 sm:-translate-x-6 
                      md:-translate-y-16 md:-translate-x-8"
            priority
            style={{
              transformOrigin: "center center",
            }}
          />
          {/* Stronger overlay to cover any remaining unwanted text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

          {/* Additional top overlay to cover template text */}
          <div
            className="absolute top-0 left-0 right-0 h-16 sm:h-20 md:h-24 
                         bg-gradient-to-b from-black/90 to-transparent"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 z-10">
          <div className="max-w-2xl">
            {/* Title */}
            <h2
              className="text-gaming-textPrimary text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold 
                           mb-2 sm:mb-3 md:mb-4 animate-fade-in leading-tight"
              style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }}
            >
              {current.title}
            </h2>

            {/* Subtitle */}
            <p
              className="text-gaming-textSecondary text-sm sm:text-base md:text-lg lg:text-xl 
                          mb-3 sm:mb-4 md:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-3"
              style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
            >
              {current.subtitle}
            </p>

            {/* CTA Button */}
            {current.cta_text && current.cta_link && (
              <a
                href={current.cta_link}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-button hover:bg-gradient-button-hover 
                          px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl 
                          text-white font-bold text-sm sm:text-base md:text-lg
                          shadow-gaming-lg hover:shadow-gaming-xl transition-all duration-300 
                          hover:scale-105 group/button"
                style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)" }}
              >
                <span>{current.cta_text}</span>
                <div className="transition-transform duration-300 group-hover/button:translate-x-1">
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {banners.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 bg-gaming-background/70 
                        hover:bg-gaming-purple border border-gaming-purple/30 
                        rounded-full p-2 sm:p-2.5 md:p-3 text-gaming-textPrimary hover:text-white
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        hover:shadow-gaming-md backdrop-blur-sm z-20"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 bg-gaming-background/70 
                        hover:bg-gaming-purple border border-gaming-purple/30 
                        rounded-full p-2 sm:p-2.5 md:p-3 text-gaming-textPrimary hover:text-white
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        hover:shadow-gaming-md backdrop-blur-sm z-20"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </>
        )}

        {/* Autoplay Control */}
        {banners.length > 1 && (
          <button
            onClick={toggleAutoplay}
            className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 
                      bg-gaming-background/70 border border-gaming-purple/30 
                      rounded-full p-1.5 sm:p-2 text-gaming-textSecondary hover:text-gaming-gold
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      hover:shadow-gaming-sm backdrop-blur-sm z-20"
            title={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            <Play
              className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${isPlaying ? "rotate-0" : "rotate-0"}`}
              fill={isPlaying ? "currentColor" : "none"}
            />
          </button>
        )}
      </div>

      {/* Slide Indicators */}
      {banners.length > 1 && (
        <div className="flex justify-center mt-4 sm:mt-5 md:mt-6 space-x-2 sm:space-x-3">
          {banners.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 
                         ${
                           index === slideIndex
                             ? "bg-gaming-purple shadow-gaming-sm scale-125"
                             : "bg-gaming-textMuted hover:bg-gaming-purpleLight"
                         }`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {banners.length > 1 && (
        <div
          className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 
                        bg-gaming-background/80 backdrop-blur-sm 
                        border border-gaming-purple/20 rounded-md sm:rounded-lg px-2 sm:px-3 py-1 z-20"
        >
          <span className="text-gaming-textSecondary text-xs sm:text-sm font-medium">
            {index + 1} / {banners.length}
          </span>
        </div>
      )}
    </div>
  );
}
