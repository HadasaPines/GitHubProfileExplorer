import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link
          href={ROUTES.HOME}
          className="text-lg font-semibold text-white transition-opacity hover:opacity-80"
        >
          GitHub Explorer
        </Link>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 transition-colors hover:text-white"
        >
          github.com ↗
        </a>
      </div>
    </header>
  );
}
