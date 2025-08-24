import supabase from "@/lib/supabaseClient";

export const fetchCategories = async () => {
  const { data, error } = await supabase.from("categories").select("id, name");

  if (error) throw error;

  return data;
};
