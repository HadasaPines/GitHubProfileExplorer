import { cn } from "@/utils/cn";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-blue-500",
        className
      )}
    />
  );
}
