import supabase from "@/lib/supabaseClient";

export const signInwithOauth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/callback`,
    },
  });

  if (error) {
    console.error("Google Auth Error:", error.message);
  }
};
