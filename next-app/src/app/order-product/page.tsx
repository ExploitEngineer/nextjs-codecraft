"use client"

import { useRouter } from "next/navigation";
export default function OrderProduct() {

    const router = useRouter();

    const handleClick = () => {
        console.log("placing your order");
        router.push("/");
    };;

    return (
        <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center">
            <h1 className="font-semibold font-mono text-white text-2xl">Order Product</h1>
            <button className="text-white font-semibold font-mono text-lg bg-sky-500 rounded-lg px-6 py-2" onClick={handleClick}>Place order</button>
        </div>
    );
};
