"use client";
import { GameListing } from "@/lib/interface";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { FetchMyListing } from "../../../../../services/FetchMyListing";
import { toast } from "sonner";
import Image from "next/image";
import { getPublicImageUrl } from "@/lib/utils/getPublicImageUrl";
import { Button } from "@/components/ui/button";
import { ListingSkeleton } from "@/components/shared/ListingSkeleton";
import { Edit, Trash2, Calendar, Gamepad2, MoreVertical } from "lucide-react";
import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import { getErrorMessage } from "@/lib/utils/getErrorMessage";
import { DeleteGameListing } from "../../../../../services/DeleteGameListing";

export default function Page() {
  const { user } = useUserStore();
  const [listings, setListings] = useState<GameListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const [selectedListingId, setSelectedListingId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadListings = async () => {
      if (!user?.id) return;

      try {
        const data = await FetchMyListing({ user_id: user.id });
        setListings(data);
      } catch (err) {
        toast.error(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, [user?.id]);

  const handleDelete = async () => {
    if (!selectedListingId) return;

    try {
      await DeleteGameListing(selectedListingId);
      toast.success("Listing deleted successfully");

      setListings((prev) => prev.filter((l) => l.id !== selectedListingId));
      setShowDialog(false);
      setSelectedListingId(null);
    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log(err);
    }
    console.log("handle delete");
  };

  if (loading) {
    return (
      <div>
        {/* Mobile Loading State */}
        <div className="md:hidden">
          <div className="mb-2">
            <div className="h-6 bg-gaming-bg-card rounded w-32 animate-pulse"></div>
            <div className="h-3 bg-gaming-bg-card rounded w-48 mt-2 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <ListingSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* Desktop Loading State */}
        <div className="hidden md:block">
          <div className="mb-3">
            <div className="h-8 bg-gaming-bg-card rounded-lg w-48 animate-pulse"></div>
            <div className="h-4 bg-gaming-bg-card rounded w-64 mt-2 animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ListingSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] px-4">
        <div className="text-center max-w-sm mx-auto">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gaming-bg-card rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gaming-purple" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gaming-text-primary mb-2">
            No Listings Yet
          </h2>
          <p className="text-gaming-text-secondary text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
            You haven't created any game listings yet. Start selling your gaming
            accounts and items today!
          </p>
          <Button
            variant="default"
            size="lg"
            className="w-full sm:w-auto bg-gaming-purple hover:bg-gaming-purple-light text-white px-6 py-3"
          >
            Create Your First Listing
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Mobile Grid */}
      <div className="md:hidden">
        <div className="space-y-3">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-gaming-bg-card border border-gaming-border rounded-xl overflow-hidden active:scale-[0.98] transition-transform duration-150"
            >
              {/* Mobile Card Layout */}
              <div className="flex">
                {/* Image */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={getPublicImageUrl(listing.image_paths[0])}
                    alt={listing.game_name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.jpg";
                    }}
                  />
                  {/* Status Badge */}
                  <div className="absolute -top-1 -right-1">
                    <div
                      className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                        listing.status === "active"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {listing.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-3 pr-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gaming-text-primary text-sm leading-tight line-clamp-2 mb-1">
                        {listing.account_title}
                      </h3>
                      <div className="flex items-center text-gaming-text-secondary text-xs mb-2">
                        <Gamepad2 className="w-3 h-3 mr-1" />
                        <span className="truncate">{listing.game_name}</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg font-bold text-gaming-gold">
                          ₹{listing.price.toLocaleString()}
                        </span>
                        <div className="flex items-center text-gaming-text-muted text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>
                            {new Date(listing.created_at).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions Menu */}
                    <button className="p-1 text-gaming-text-secondary hover:text-gaming-text-primary transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex border-t border-gaming-border">
                <button className="flex-1 flex items-center justify-center py-2.5 text-gaming-text-primary hover:bg-gaming-purple/5 hover:text-gaming-purple-light transition-colors text-sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </button>
                <div className="w-px bg-gaming-border"></div>
                <button
                  className="flex-1 flex items-center justify-center py-2.5 text-red-400 hover:bg-red-500/5 hover:text-red-300 transition-colors text-sm"
                  onClick={() => {
                    setSelectedListingId(listing.id);
                    setShowDialog(true);
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="group relative bg-gaming-bg-card border border-gaming-border rounded-xl overflow-hidden hover:border-gaming-border-light transition-all duration-300 hover:shadow-gaming-lg hover:-translate-y-1"
            >
              {/* Desktop Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={getPublicImageUrl(listing.image_paths[0])}
                  alt={listing.game_name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.jpg";
                  }}
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      listing.status === "active"
                        ? "bg-green-500/90 text-green-100 border border-green-500/30"
                        : "bg-yellow-500/90 text-yellow-100 border border-yellow-500/30"
                    }`}
                  >
                    {listing.status}
                  </div>
                </div>
              </div>

              {/* Desktop Content Container */}
              <div className="p-4 lg:p-5">
                <div className="mb-3">
                  <h3 className="font-semibold text-gaming-text-primary text-lg mb-1 line-clamp-2 group-hover:text-gaming-purple-light transition-colors">
                    {listing.account_title}
                  </h3>
                  <div className="flex items-center text-gaming-text-secondary text-sm">
                    <Gamepad2 className="w-4 h-4 mr-1.5" />
                    <span className="truncate">{listing.game_name}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-gaming-gold">
                      ₹{listing.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gaming-text-muted text-xs mb-4">
                  <Calendar className="w-3 h-3 mr-1.5" />
                  <span>
                    {new Date(listing.created_at).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Desktop Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gaming-border hover:border-gaming-purple hover:bg-gaming-purple/10 text-gaming-text-primary hover:text-gaming-purple-light"
                  >
                    <Edit className="w-4 h-4" />
                    <span className="hidden lg:inline ml-1">Edit</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-red-400 hover:text-red-300"
                    onClick={() => {
                      setSelectedListingId(listing.id);
                      setShowDialog(true);
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden lg:inline ml-1">Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConfirmationDialog
        isOpen={showDialog}
        onClose={() => setShowDialog(false)}
        onConfirm={handleDelete}
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
        showIcon={true}
      />
    </div>
  );
}
