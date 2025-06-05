import { getBannerData } from "@/lib/queries";

import { ArrowRight } from "lucide-react";
import BannerSlider from "./BannerSlider";

type Banner = {
  _id: string;
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

type HeroSectionProps = {
  promotionalOffers?: PromotionalOffer[];
};

export default async function HeroSection({
  promotionalOffers = [],
}: HeroSectionProps) {
  const banners: Banner[] = await getBannerData();

  if (!banners.length) {
    return (
      <div className="w-full bg-bg-primary rounded-sm">
        <div className="px-4 py-2">
          <div className="relative h-[280px] sm:h-46 md:h-[300px] w-full overflow-hidden rounded-sm bg-gray-200 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-500">Loading banners...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-bg-primary rounded-sm">
      <div className="px-4 py-2">
        <BannerSlider banners={banners} />
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
