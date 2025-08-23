import supabase from "@/lib/supabaseClient";

export const FetchMyListing = async ({ user_id }: { user_id: string }) => {
  const { data, error } = await supabase
    .from("game_accounts")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET;
  if (!bucket) {
    throw new Error(
      "Supabase bucket name is not defined in environment variables."
    );
  }

  const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}`;

  return data.map((item) => ({
    ...item,
    // This assumes `item.image_paths` stores relative paths.
    image_paths: item.image_paths?.map((path: string) =>
      path.startsWith("http") ? path : `${baseUrl}/${path}`
    ),
  }));
};
