import SearchBar from "@/components/search/SearchBar";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">GitHub Explorer</h1>
          <p className="mt-2 text-gray-400">
            Search any GitHub username to explore their profile, repositories, and activity.
          </p>
        </div>

        <SearchBar />
      </div>
    </div>
  );
}
