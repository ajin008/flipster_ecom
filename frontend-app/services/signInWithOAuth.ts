import supabase from "@/lib/supabaseClient";

export const signInwithOauth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/callback`,
    },
  });

  if (error) {
    console.error("Google Auth Error:", error.message);
  }
};
