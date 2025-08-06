"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabaseClient";
import { useUserStore } from "@/store/userStore";

export default function AuthCallback() {
  const router = useRouter();
  const { setUser } = useUserStore();

  useEffect(() => {
    const handleCallback = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data?.user) {
        router.replace("/");
      }

      const user = data.user!;

      setUser({
        id: user.id!,
        email: user.email!,
        username:
          user.user_metadata?.full_name || user.user_metadata?.name || "",
      });

      const { data: profileExist, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", user.id)
        .maybeSingle();

      if (!profileExist || profileError) {
        await supabase.from("profiles").insert({
          id: user.id,
          username:
            user.user_metadata?.full_name || user.user_metadata?.name || "",
        });
      }
      router.replace("/");
    };
    handleCallback();
  }, [router, setUser]);

  return <p className="text-center mt-10">Authenticating...</p>;
}
