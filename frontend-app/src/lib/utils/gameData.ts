// Define the product type
export type GameAccount = {
  id: string;
  name: string;
  shortDescription: string;
  verificationStatus: boolean;
  views: number;
  price: number;
  createdAt: string;
  game: string;
  imageUrl: string;
  region: string;
  level: number;
};

// Top Picks (6 items)
export const topPicks: GameAccount[] = [
  {
    id: "top001",
    name: "Legendary Valorant Account",
    shortDescription: "Radiant rank, all agents unlocked, 10+ premium skins",
    views: 4500,
    price: 349.99,
    createdAt: "2023-10-15T09:20:00Z",
    verificationStatus: true,
    game: "Valorant",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "NA",
    level: 150,
  },
  {
    id: "top002",
    name: "Apex Legends Predator Account",
    shortDescription: "Top 500 Predator, Heirloom collection, 5000+ kills",
    views: 3800,
    price: 499.99,
    createdAt: "2023-09-05T14:30:00Z",
    verificationStatus: true,
    game: "Apex Legends",
    imageUrl:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&auto=format",
    region: "EU",
    level: 200,
  },
  {
    id: "top003",
    name: "Fortnite OG Account",
    shortDescription: "Season 1 veteran, Rare skins, Black Knight included",
    views: 5200,
    price: 599.99,
    createdAt: "2023-08-22T11:45:00Z",
    verificationStatus: true,
    game: "Fortnite",
    imageUrl:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&auto=format",
    region: "Global",
    level: 300,
  },
  {
    id: "top004",
    name: "Genshin Impact Whale Account",
    shortDescription: "AR 60, C6 characters + R5 weapons, 100% exploration",
    views: 4100,
    price: 799.99,
    createdAt: "2023-11-10T16:20:00Z",
    verificationStatus: true,
    game: "Genshin Impact",
    imageUrl:
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&auto=format",
    region: "Asia",
    level: 60,
  },
  {
    id: "top005",
    name: "Call of Duty: Warzone Pro",
    shortDescription: "Legendary rank, Damascus camo, All meta loadouts",
    views: 3600,
    price: 429.99,
    createdAt: "2023-07-30T13:10:00Z",
    verificationStatus: true,
    game: "Call of Duty: Warzone",
    imageUrl:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&auto=format",
    region: "Global",
    level: 250,
  },
  {
    id: "top006",
    name: "League of Legends Challenger",
    shortDescription: "Challenger 800LP, All champions, Rare skins",
    views: 3900,
    price: 549.99,
    createdAt: "2023-12-05T10:05:00Z",
    verificationStatus: true,
    game: "League of Legends",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "KR",
    level: 400,
  },
];

// Action Games (5 items)
export const actionGames: GameAccount[] = [
  {
    id: "act001",
    name: "Doom Eternal Unlocked",
    shortDescription: "All DLCs, Ultra-Nightmare completed, Unlocked cosmetics",
    views: 2100,
    price: 89.99,
    createdAt: "2023-06-18T12:30:00Z",
    verificationStatus: true,
    game: "Doom Eternal",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "Global",
    level: 50,
  },
  {
    id: "act002",
    name: "Cyberpunk 2077 Maxed",
    shortDescription:
      "Level 50, All endings, Legendary gear, Phantom Liberty DLC",
    views: 1800,
    price: 129.99,
    createdAt: "2023-09-25T15:45:00Z",
    verificationStatus: false,
    game: "Cyberpunk 2077",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "Global",
    level: 50,
  },
  {
    id: "act003",
    name: "Dark Souls III NG+7",
    shortDescription: "SL 300, All bosses no-hit, Complete item collection",
    views: 2500,
    price: 99.99,
    createdAt: "2023-08-14T10:20:00Z",
    verificationStatus: true,
    game: "Dark Souls III",
    imageUrl:
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&auto=format",
    region: "Global",
    level: 300,
  },
  {
    id: "act004",
    name: "Elden Ring 100%",
    shortDescription: "All achievements, Max level, All legendary weapons",
    views: 3200,
    price: 149.99,
    createdAt: "2023-07-05T14:15:00Z",
    verificationStatus: true,
    game: "Elden Ring",
    imageUrl:
      "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=600&auto=format",
    region: "Global",
    level: 150,
  },
  {
    id: "act005",
    name: "Devil May Cry 5 SSS",
    shortDescription:
      "All missions S-ranked, Unlockables, Bloody Palace cleared",
    views: 1700,
    price: 79.99,
    createdAt: "2023-10-30T11:50:00Z",
    verificationStatus: false,
    game: "Devil May Cry 5",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "Global",
    level: 100,
  },
];

// Sports Games (5 items)
export const sportsGames: GameAccount[] = [
  {
    id: "spt001",
    name: "FIFA 23 Ultimate Team",
    shortDescription: "10M coins, TOTY Mbappé, Full meta squad",
    views: 2900,
    price: 199.99,
    createdAt: "2023-11-20T09:10:00Z",
    verificationStatus: true,
    game: "FIFA 23",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "EU",
    level: 100,
  },
  {
    id: "spt002",
    name: "NBA 2K24 MyTeam",
    shortDescription: "Galaxy Opal lineup, 5M MT, Unlimited wins",
    views: 2300,
    price: 179.99,
    createdAt: "2023-10-12T16:40:00Z",
    verificationStatus: false,
    game: "NBA 2K24",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "NA",
    level: 95,
  },
  {
    id: "spt003",
    name: "Madden NFL 24 MUT",
    shortDescription: "99 OVR team, 5M coins, All LTD cards",
    views: 1900,
    price: 159.99,
    createdAt: "2023-09-15T13:25:00Z",
    verificationStatus: true,
    game: "Madden NFL 24",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "NA",
    level: 90,
  },
  {
    id: "spt004",
    name: "Rocket League S10 GC",
    shortDescription: "Grand Champ rewards, Alpha boost, 5000+ wins",
    views: 2700,
    price: 129.99,
    createdAt: "2023-12-08T10:15:00Z",
    verificationStatus: true,
    game: "Rocket League",
    imageUrl:
      "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&auto=format",
    region: "Global",
    level: 500,
  },
  {
    id: "spt005",
    name: "UFC 5 Ranked Killer",
    shortDescription: "Division 20, All fighters maxed, Undefeated record",
    views: 1500,
    price: 89.99,
    createdAt: "2023-08-28T14:50:00Z",
    verificationStatus: false,
    game: "UFC 5",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600&auto=format",
    region: "Global",
    level: 50,
  },
];

// Helper function to get Top Picks
export const getTopPicks = (count: number = 6): GameAccount[] => {
  return topPicks.slice(0, count);
};

// Helper function to get Action Games
export const getActionGames = (count?: number): GameAccount[] => {
  return count ? actionGames.slice(0, count) : actionGames;
};

// Helper function to get Sports Games
export const getSportsGames = (count?: number): GameAccount[] => {
  return count ? sportsGames.slice(0, count) : sportsGames;
};
