'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {

    const router = useRouter();

    function handleClick() {
        console.log("placking your order");
        router.push('/');
    }

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <div className="space-y-4">
                <h1 className="text-white font-semibold text-2xl">Order product</h1>
                <Button className="text-lg py-6 px-8 font-bold bg-purple-500" onClick={handleClick}>Place order</Button>
            </div>
        </div>
    );
}
