"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      <p className="text-red-600 font-semibold text-sm">{error.message}</p>
      <button
        className="bg-orange-600 text-white font-semibold font-mono text-sm py-2 px-8 cursor-pointer rounded-lg"
        onClick={reload}
      >
        Try again
      </button>
    </div>
  );
}

{
  /*
Error handling precision
handling errors in nested files
*/
}
