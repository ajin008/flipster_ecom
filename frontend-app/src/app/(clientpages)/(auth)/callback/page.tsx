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
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Check if profile already exists
        try {
          const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

          if (profileError || !profile) {
            console.log("Inserting profile for:", user.id, user.user_metadata);
            await supabase.from("profiles").insert({
              id: user.id,
              username: user.user_metadata?.username || "",
            });
          }

          router.push("/");
        } catch (error) {
          console.error("Error completing signup:", error);
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
