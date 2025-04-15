import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
};

export default function Blog() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <h1 className="font-semibold font-mono text-white text-2xl">My Blog</h1>
        </div>
    );
};
