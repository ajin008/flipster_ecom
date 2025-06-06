"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { urlFor } from "@/lib/sanity";

type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  crop?: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

type Banner = {
  _id: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: SanityImage;
  extraImages?: SanityImage[];
  bgColor?: string;
};

type Props = {
  banners: Banner[];
};

type Slide = {
  _id: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  image: SanityImage;
  bgColor?: string;
  isMainImage: boolean;
  originalBannerId: string;
};

export default function BannerSlider({ banners }: Props) {
  // Memoize slides to prevent recalculation on every render
  const slides: Slide[] = useMemo(() => {
    if (!banners || banners.length === 0) return [];

    return banners.flatMap((banner) => {
      const slides: Slide[] = [];

      // Add main image slide
      slides.push({
        ...banner,
        _id: `${banner._id}-main`,
        image: banner.image,
        isMainImage: true,
        originalBannerId: banner._id,
      });

      // Add extra images if they exist
      if (banner.extraImages && banner.extraImages.length > 0) {
        banner.extraImages.forEach((img, idx) => {
          slides.push({
            ...banner,
            _id: `${banner._id}-extra-${idx}`,
            image: img,
            isMainImage: false,
            originalBannerId: banner._id,
          });
        });
      }

      return slides;
    });
  }, [banners]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set ready state after component mounts
  useEffect(() => {
    if (slides.length > 0) {
      setIsReady(true);
    }
  }, [slides.length]);

  // Memoize current background color to prevent unnecessary re-renders
  const currentBgColor = useMemo(() => {
    return slides[currentSlide]?.bgColor || "transparent";
  }, [slides, currentSlide]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Auto-slide functionality with better cleanup
  useEffect(() => {
    if (!isReady || slides.length <= 1 || isTransitioning) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, slides.length, isTransitioning, isReady]);

  // Optimized slide change function
  const changeSlide = useCallback(
    (newIndex: number) => {
      if (
        isTransitioning ||
        newIndex === currentSlide ||
        newIndex < 0 ||
        newIndex >= slides.length
      ) {
        return;
      }

      setIsTransitioning(true);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      setCurrentSlide(newIndex);

      // Reset transition state
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    },
    [currentSlide, slides.length, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    changeSlide((currentSlide + 1) % slides.length);
  }, [changeSlide, currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [changeSlide, currentSlide, slides.length]);

  // Don't render anything until ready
  if (!isReady || slides.length === 0) {
    return (
      <div className="relative h-[280px] sm:h-46 md:h-[300px] w-full overflow-hidden rounded-sm bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500">Loading banners...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-[280px] sm:h-46 md:h-[300px] w-full overflow-hidden rounded-sm transition-colors duration-300"
      style={{ backgroundColor: currentBgColor }}
    >
      {/* Slides Container */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning
            ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
          width: `${slides.length * 100}%`,
          willChange: "transform",
        }}
      >
        {slides.map((slide, index) => {
          // Only render slides that are visible or adjacent for performance
          const isVisible = Math.abs(index - currentSlide) <= 1;

          return (
            <div
              key={slide._id}
              className="relative flex-none h-full"
              style={{ width: `${100 / slides.length}%` }}
            >
              {isVisible && (
                <>
                  {/* Image Container */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={urlFor(slide.image).url()}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0 || index === currentSlide}
                      sizes="100vw"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgXmkfYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgXmkfYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgXmkfYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgXmkfYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgXmkfYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgUwqlvYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9iYUJBCY5iGxTqLJGBnmLBBOjCqjqSaEgXmkfYdof1txfvSXWGaRmknyLDKPKjHN0TaGFgROwMOkdcGRmrpxEKCW4+I1qJUXFiEXqPgZXYQb+oBsVYcCxmrCKCaWvYLHNuCzYNrXRYhJOaXNJBqkgOmNnqhEF9h"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col md:flex-row items-center w-full h-full px-4 md:px-12">
                    <div className="w-full md:w-1/2 pt-8 md:pt-0 text-center md:text-left">
                      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg mb-6 text-white/90 leading-relaxed line-clamp-3">
                        {slide.description}
                      </p>
                      <a
                        href={slide.ctaLink}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors duration-200 font-medium"
                      >
                        {slide.cta}
                        <ShoppingBag className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                    <div className="w-full md:w-1/2 h-full" />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - Only show if more than one slide */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full text-white z-30 transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous banner"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-full text-white z-30 transition-all duration-200 backdrop-blur-sm"
            aria-label="Next banner"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots Indicator - Only show if more than one slide */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => changeSlide(index)}
              disabled={isTransitioning}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-200 disabled:cursor-not-allowed ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
