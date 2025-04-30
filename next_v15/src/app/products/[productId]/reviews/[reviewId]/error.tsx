"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundry({
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
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
      <div>
        <h1 className="text-white font-semibold text-2xl">{error.message}</h1>
        <Button
          className="bg-white text-black font-bold"
          onClick={() => reload()}
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
