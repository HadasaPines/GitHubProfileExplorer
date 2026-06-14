import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SearchStore } from "@/types/search";

export const useSearchStore = create<SearchStore>()(
  persist(
    (set, get) => ({
      recentSearches: [],

      addSearch: (username) => {
        const existing = get().recentSearches.filter(
          (s) => s.username !== username
        );
        set({
          recentSearches: [
            { username, searchedAt: new Date().toISOString() },
            ...existing,
          ].slice(0, 5),
        });
      },

      removeSearch: (username) => {
        set({
          recentSearches: get().recentSearches.filter(
            (s) => s.username !== username
          ),
        });
      },

      clearSearches: () => set({ recentSearches: [] }),
    }),
    { name: "github-explorer-searches" }
  )
);
