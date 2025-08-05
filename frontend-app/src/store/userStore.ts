import { IUser } from "@/lib/interface";
import { create } from "zustand";
import supabase from "@/lib/supabaseClient";

interface UserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  logout: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null });
      console.log("✅ Logout successful");
    } catch (error) {
      console.error("❌ Logout failed:", error);
    }
  },
}));
