import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
};

export default async function Blog() {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("international delay");
        }, 2000)
    })

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">My blog</h1>
        </div>
    );
}
