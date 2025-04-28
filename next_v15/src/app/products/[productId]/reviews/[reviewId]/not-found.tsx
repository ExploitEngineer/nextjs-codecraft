'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {

    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <div className="font-mono space-y-5">
                <h1 className="text-white font-semibold text-2xl">Review Page Not Found</h1>
                <p className="text-base font-medium">review {reviewId} not found for product {productId}</p>
            </div>
        </div>
    );
}

// not found component doesn't assecpt props | we have to use the usePathname hook from next.js
