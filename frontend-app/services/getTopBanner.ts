import supabase from "@/lib/supabaseClient";

export const getBannerData = async () => {
  const { data, error } = await supabase.from("banners").select("*");
  if (error) {
    console.error("Error fetching banners:", error.message);
    return [];
  }

  return data;
};
