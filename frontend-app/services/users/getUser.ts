import supabase from "@/lib/supabaseClient";

export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) throw error || new Error("User not found");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .single();

  if (profileError) throw profileError;

  return {
    id: user.id,
    email: user.email || "",
    username: profile.username as string,
  };
};
