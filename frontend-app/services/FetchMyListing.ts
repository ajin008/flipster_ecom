import supabase from "@/lib/supabaseClient";

export const FetchMyListing = async ({ user_id }: { user_id: string }) => {
  const { data, error } = await supabase
    .from("game_accounts")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch listings: ${error.message}`);
  }

  return data;
};
