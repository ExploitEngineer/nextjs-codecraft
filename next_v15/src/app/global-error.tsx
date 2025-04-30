"use client";

import { Button } from "@/components/ui/button";
import "./globals.css";

export default function GlobalError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <Button
        onClick={() => {
          window.location.reload();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Refresh
      </Button>
    </div>
  );
}
