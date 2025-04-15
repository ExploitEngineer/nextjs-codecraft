import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center">
            <h1 className="font-semibold font-mono text-white text-2xl">Home Page</h1>
            <div className="flex gap-3">
                <Link className="px-6 py-2 font-semibold bg-sky-600 rounded-lg" href='/blog'>Blog</Link>
                <Link className="px-6 py-2 font-semibold bg-sky-600 rounded-lg" href='/products'>Products</Link>
            </div>
        </div>
    );
};
