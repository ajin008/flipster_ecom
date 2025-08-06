// components/HeroSection.tsx
import { getBannerData } from "../../../services/getTopBanner";
import BannerSlider from "./BannerSlider";
import { ArrowRight, Gamepad2 } from "lucide-react";

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
  const banners = await getBannerData();

  if (!banners.length) {
    return (
      <div className="w-full bg-gradient-primary rounded-xl border border-gaming-purple/20">
        <div className="h-[400px] flex flex-col items-center justify-center text-gaming-textSecondary">
          <Gamepad2 className="h-16 w-16 text-gaming-purple mb-4 animate-pulse" />
          <p className="text-lg font-medium">No Gaming Banners Available</p>
          <p className="text-sm text-gaming-textMuted mt-2">
            Check back soon for exciting offers!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* Main Banner Section */}
      <div className="px-4 py-2">
        <BannerSlider banners={banners} />
      </div>

      {/* Promotional Offers Section */}
      {promotionalOffers.length > 0 && (
        <div className="px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotionalOffers.map((offer, index) => (
              <div
                key={index}
                className="group relative bg-gradient-card border border-gaming-purple/20 rounded-xl p-6 
                           hover:border-gaming-pink/40 transition-all duration-300 hover:shadow-gaming-hover
                           backdrop-blur-md overflow-hidden"
              >
                {/* Background glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-gaming-radial opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300"
                />

                {/* Content */}
                <div className="relative flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 p-3 rounded-xl bg-gradient-button 
                                  shadow-gaming-sm group-hover:shadow-gaming-md transition-shadow duration-300"
                  >
                    <div className="text-white">{offer.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-gaming-gold font-bold text-lg mb-2 group-hover:text-gaming-goldBright 
                                   transition-colors duration-300"
                    >
                      {offer.title}
                    </h3>
                    <p className="text-gaming-textSecondary text-sm leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="flex-shrink-0 h-5 w-5 text-gaming-purple group-hover:text-gaming-pink 
                                         transition-all duration-300 group-hover:translate-x-1"
                  />
                </div>

                {/* Hover border effect */}
                <div
                  className="absolute inset-0 rounded-xl border-2 border-transparent 
                                group-hover:border-gaming-pink/30 transition-colors duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action Banner */}
    </div>
  );
}
