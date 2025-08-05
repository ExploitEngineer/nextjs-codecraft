"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <>
      <h1>Order product</h1>
      <button
        className="py-3 cursor-pointer px-8 text-sm rounded-lg bg-blue-600 font-bold"
        onClick={handleClick}
      >
        Place order
      </button>
    </>
  );
}
