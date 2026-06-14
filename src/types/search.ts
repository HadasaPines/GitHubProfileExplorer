export interface RecentSearch {
  username: string;
  searchedAt: string;
}

export interface SearchStore {
  recentSearches: RecentSearch[];
  addSearch: (username: string) => void;
  removeSearch: (username: string) => void;
  clearSearches: () => void;
}
