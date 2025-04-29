import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <div className="flex flex-col space-y-4">
                <h1 className="text-white font-semibold text-2xl">Welcome home!</h1>
                <div>
                    <Link href='/blog'>
                        <Button className="bg-zinc-700 py-6 w-full font-semibold text-lg">Blog</Button>
                    </Link>
                </div>
                <div>
                    <Link href='/products'>
                        <Button className="bg-zinc-700 py-6 w-full font-semibold text-lg">Products</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
