import { GameListingFormData } from "@/lib/interface";
import supabase from "@/lib/supabaseClient";

export const createGameListing = async (data: GameListingFormData) => {
  const uploadedImagePaths: string[] = [];

  for (const image of data.images) {
    const fileName = `${Date.now()}-${image.name}`;
    const filePath = `${data.user_id}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("game-images")
      .upload(filePath, image);

    if (uploadError) {
      throw new Error(`Image upload failed: ${uploadError.message}`);
    }

    uploadedImagePaths.push(filePath);
  }

  const { error: insertError } = await supabase.from("game_accounts").insert({
    game_name: data.game_name,
    account_title: data.listing_title,
    category: data.category,
    price: parseFloat(data.price),
    description: data.description,
    user_id: data.user_id,
    image_paths: uploadedImagePaths, // Make sure you add a text[] column in Supabase
  });

  if (insertError) {
    throw new Error(`Listing creation failed: ${insertError.message}`);
  }

  return { success: true };
};
