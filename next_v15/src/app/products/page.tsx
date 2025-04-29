import Link from "next/link";
import { Button } from '@/components/ui/button';

export default function ProductList() {
    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <div className='space-y-4'>
                <h1 className="text-white font-semibold text-2xl">Product list</h1>
                <div>
                    <h2 className="text-white font-bold text-lg">Product 1</h2>
                    <h2 className="text-white font-bold text-lg">Product 2</h2>
                    <h2 className="text-white font-bold text-lg">Product 3</h2>
                </div>
                <div>
                    <Link replace href='/'>
                        <Button className="bg-zinc-700 py-6 w-full font-semibold text-lg">Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
