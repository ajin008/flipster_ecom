"use client";
import { useEffect } from "react";
import supabase from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const completeSignup = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Check if profile already exists
        const { data: profile } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (!profile) {
          // Insert profile
          await supabase.from("profiles").insert({
            id: user.id,
            username: user.user_metadata?.username || "",
          });
        }

        router.push("/");
      } else {
        router.push("/login");
      }
    };

    completeSignup();
  }, [router]);

  return <p>Completing signup...</p>;
}
