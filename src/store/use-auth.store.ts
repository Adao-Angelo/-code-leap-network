import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  username: string;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      username: "",
      isAuthenticated: false,
      login: (username) =>
        set({
          username,
          isAuthenticated: true,
        }),
      logout: () => {
        set({
          username: "",
          isAuthenticated: false,
        });

        document.cookie = "token=; path=/; max-age=0";
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
