import supabase from "@/lib/supabaseClient";

export const DeleteGameListing = async (id: string) => {
  const { error } = await supabase.from("game_accounts").delete().eq("id", id);

  if (error) {
    throw new Error(`Failed to delete listing: ${error.message}`);
  }

  return { success: true };
};
