// Import React for React.ReactNode
export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string;
  image_url: string;
};

export type GameListingFormData = {
  // Step 1: Basic Details
  game_name: string;
  game_title: string;
  category: string;
  price: string;

  // Step 2: Media & Description
  images: FileList | null;
  description: string;
};

export type FormStep = {
  id: number;
  title: string;
  fields: (keyof GameListingFormData)[];
};

export const FORM_STEPS: FormStep[] = [
  {
    id: 1,
    title: "Basic Details",
    fields: ["game_name", "game_title", "category", "price"],
  },
  {
    id: 2,
    title: "Media & Description",
    fields: ["images", "description"],
  },
];

export const GAME_CATEGORIES = [
  { value: "", label: "Select category" },
  { value: "sport", label: "Sport" },
  { value: "action", label: "Action" },
  { value: "simulator", label: "Simulator" },
  { value: "adventure", label: "Adventure" },
  { value: "strategy", label: "Strategy" },
  { value: "rpg", label: "RPG" },
  { value: "racing", label: "Racing" },
  { value: "puzzle", label: "Puzzle" },
];
