import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
};

export default function Blog() {
    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">My blog</h1>
        </div>
    );
}
