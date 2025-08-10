import supabase from "@/lib/supabaseClient";

export const FetchMyListing = async ({ user_id }: { user_id: string }) => {
  const { data, error } = await supabase
    .from("game_accounts")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data.map((item) => ({
    ...item,
    image_paths: item.image_paths?.map(
      (path: string) =>
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_BUCKET}/${path}`
    ),
  }));
};
