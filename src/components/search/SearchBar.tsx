"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useSearchStore } from "@/store/searchStore";
import { ROUTES } from "@/constants/routes";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const { recentSearches, addSearch, removeSearch } = useSearchStore();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const username = value.trim();
    if (!username) return;
    addSearch(username);
    router.push(ROUTES.PROFILE(username) as `/${string}`);
  }

  function handleRecentClick(username: string) {
    setValue(username);
    addSearch(username);
    router.push(ROUTES.PROFILE(username) as `/${string}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search a GitHub username..."
          autoFocus
        />
        <Button type="submit" disabled={!value.trim()}>
          Search
        </Button>
      </form>

      {recentSearches.length > 0 && (
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-500">Recent searches</p>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search) => (
              <div
                key={search.username}
                className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 pl-3 pr-1 py-1"
              >
                <button
                  type="button"
                  onClick={() => handleRecentClick(search.username)}
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {search.username}
                </button>
                <button
                  type="button"
                  onClick={() => removeSearch(search.username)}
                  className="ml-1 flex h-4 w-4 items-center justify-center rounded-full text-gray-500 hover:bg-white/10 hover:text-white"
                  aria-label={`Remove ${search.username}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
