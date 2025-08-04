"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log("pathname=", pathname.split("/"));

  const productId: string = pathname.split("/")[2];
  const reviewId: string = pathname.split("/")[4];

  return (
    <div className="max-w-7xl min-h-screen m-auto flex items-center justify-center font-mono flex-col gap-6">
      <h1 className="text-red-600 text-shadow-red-800 text-shadow-lg font-semibold text-4xl">
        Review {reviewId} not Found for product {productId}
      </h1>
    </div>
  );
}
