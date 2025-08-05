"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-600 font-semibold text-sm">{error.message}</div>
  );
}
