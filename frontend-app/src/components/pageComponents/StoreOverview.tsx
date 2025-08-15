"use client";
import React, { useEffect, useState } from "react";
import {
  Star,
  Calendar,
  Plus,
  ExternalLink,
  Package,
  CheckCircle,
  Clock,
  Eye,
  IndianRupee,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getStoreData } from "../../../services/gameListings";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { StoreOverviewLoading } from "../layout/StoreOverviewLoading";

// Define a type for our fetched store data
interface StoreData {
  storeName: string;
  rating: number;
  profileViews: number;
  joinDate: string;
  totalListings: number;
  soldListings: number;
  pendingOrders: number;
  totalEarnings: number;
}

export default function StoreOverview() {
  const { user } = useUserStore();
  const router = useRouter();
  const [storeData, setStoreData] = useState<StoreData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getStoreData(user.id);
        setStoreData(data);
      } catch (error) {
        toast.error("Failed to fetch your store data.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user?.id]);

  // Helper functions
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-gaming-gold text-gaming-gold"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="w-3.5 h-3.5 fill-gaming-gold/50 text-gaming-gold"
          />
        );
      } else {
        stars.push(
          <Star key={i} className="w-3.5 h-3.5 text-gaming-text-muted/30" />
        );
      }
    }
    return stars;
  };

  if (isLoading) {
    return <StoreOverviewLoading />;
  }

  if (!storeData) {
    return (
      <Card className="border-gaming-border bg-gaming-bg-card/50">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-gaming-text-primary">
            Welcome!
          </h3>
          <p className="text-gaming-text-secondary mt-2 mb-4">
            You haven't opened your store yet.
          </p>
          <Button variant="gaming" onClick={() => router.push("/selling")}>
            Create Your First Listing to Begin
          </Button>
        </CardContent>
      </Card>
    );
  }

  const metrics = [
    {
      label: "Active Listings",
      value: storeData.totalListings,
      icon: Package,
      color: "text-gaming-purple-light",
      bgColor: "bg-gaming-purple/10",
    },
    {
      label: "Items Sold",
      value: storeData.soldListings,
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      label: "Pending",
      value: storeData.pendingOrders,
      icon: Clock,
      color: "text-gaming-gold",
      bgColor: "bg-gaming-gold/10",
    },
    {
      label: "Earnings",
      value: formatCurrency(storeData.totalEarnings),
      icon: IndianRupee,
      color: "text-gaming-pink",
      bgColor: "bg-gaming-pink/10",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <Card className="border-gaming-border bg-gradient-card backdrop-blur-gaming overflow-hidden shadow-gaming-lg">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <CardContent className="relative p-4 md:p-6">
          <div className="space-y-4">
            {/* Profile Section */}
            <div className="flex items-center gap-3">
              <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 border-gaming-purple-light shadow-gaming-md">
                <AvatarImage src={""} alt={storeData.storeName} />
                <AvatarFallback className="bg-gradient-purple text-gaming-text-primary text-lg md:text-xl font-bold">
                  {getInitials(storeData.storeName)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-lg md:text-xl font-bold text-gaming-text-primary truncate">
                    {storeData.storeName}
                  </h1>
                  <Badge className="bg-gaming-gold text-gaming-bg-primary px-1.5 py-0.5 text-xs">
                    <Award className="w-3 h-3 mr-1" />
                    Pro
                  </Badge>
                </div>

                {/* Rating & Views Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {storeData.rating > 0 ? (
                      <>
                        <div className="flex items-center">
                          {renderStars(storeData.rating)}
                        </div>
                        <span className="text-gaming-gold font-semibold text-xs">
                          {storeData.rating.toFixed(1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-gaming-text-muted text-xs font-medium">
                        No ratings yet
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-gaming-text-secondary">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">
                      {formatNumber(storeData.profileViews)} views
                    </span>
                  </div>
                </div>

                {/* Join Date */}
                <div className="flex items-center gap-1.5 text-gaming-text-secondary mt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="text-xs">Since {storeData.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="gaming" onClick={() => router.push("/selling")}>
                <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden sm:inline">Create Listing</span>
                <span className="sm:hidden">Create</span>
              </Button>

              <Button
                variant="gaming-edit"
                onClick={() => router.push("/Mylisting")}
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span className="hidden sm:inline">View Listing</span>
                <span className="sm:hidden">View Listing</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            className="border-gaming-border bg-gaming-bg-card/50 backdrop-blur-gaming hover:shadow-gaming-md transition-all duration-300 hover:scale-105 group"
          >
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${metric.bgColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-lg font-bold text-gaming-text-primary truncate">
                    {metric.value}
                  </p>
                  <p className="text-gaming-text-secondary text-xs font-medium truncate">
                    {metric.label}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
