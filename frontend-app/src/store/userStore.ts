import { logoutApi } from "@/api/api";
import { IUser } from "@/lib/interface";
import { create } from "zustand";

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
      await logoutApi();
      set({ user: null });
      console.log("✅ Logout successful");
    } catch (error) {
      console.error("❌ Logout failed:", error);
    }
  },
}));
