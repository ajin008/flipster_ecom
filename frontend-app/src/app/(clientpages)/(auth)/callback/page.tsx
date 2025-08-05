"use client";
import { useEffect } from "react";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    console.log("auth/callback page is triggering");

    const completeSignup = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const user = session?.user;

      if (user) {
        console.log("✅ Session user:", user);
        console.log("📦 Metadata:", user.user_metadata);

        try {
          const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .maybeSingle(); // ✅ safe if 0 rows

          if (profileError)
            console.error("Profile select error:", profileError);

          if (!profile) {
            console.log("🆕 Inserting new profile");
            await supabase.from("profiles").insert({
              id: user.id,
              username: user.user_metadata?.username || "",
            });
          }

          router.push("/");
        } catch (error) {
          console.error("❌ Error completing signup:", error);
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    };

    completeSignup();
  }, [router]);

  return <p>Completing signup...</p>;
}
