import supabase from "@/lib/supabaseClient";
import { GameListingFormData } from "@/lib/types";

export async function uploadGameImage(file: File) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("assets")
    .upload(`productimg/${fileName}`, file);

  if (error) throw error;

  return data?.path || null;
}

export async function createGameListing(
  data: GameListingFormData,
  imageUrl: string
) {
  const { error } = await supabase.from("games").insert({
    game_name: data.game_name,
    game_title: data.game_title,
    category: data.category,
    price: data.price,
    description: data.description,
    image_url: imageUrl,
  });

  if (error) throw error;
}
