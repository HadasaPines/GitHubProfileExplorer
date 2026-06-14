interface ErrorMessageProps {
  message: string;
  status?: number;
}

export default function ErrorMessage({ message, status }: ErrorMessageProps) {
  return (
    <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-6 py-4 text-center">
      {status && (
        <p className="text-4xl font-bold text-red-400">{status}</p>
      )}
      <p className="mt-1 text-red-300">{message}</p>
    </div>
  );
}
