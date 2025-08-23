import supabase from "@/lib/supabaseClient";

export const fetchListingById = async (listingId: string) => {
  const { data, error } = await supabase
    .from("game_accounts") // Your table name
    .select("*")
    .eq("id", listingId) // Find the row where the 'id' column matches our listingId
    .single(); // Expect only one result, and return it as an object

  // If Supabase returns an error (e.g., listing not found), throw an error.
  if (error) {
    console.error("Error fetching listing:", error);
    throw new Error(error.message);
  }

  // Add the public URL to the image paths before returning
  const bucket = process.env.NEXT_PUBLIC_SUPABASE_BUCKET;
  if (!bucket) {
    throw new Error("Supabase bucket name is not defined.");
  }
  const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}`;

  const fullImagePaths = data.image_paths.map((path: string) =>
    path.startsWith("http") ? path : `${baseUrl}/${path}`
  );

  return { ...data, image_paths: fullImagePaths };
};
