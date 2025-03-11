"use client"

import { notFound } from "next/navigation";

export const defaultParams = false;

// INFO: SSG (Static Site Generation)
export async function generateStaticParams() {
    // const response = await fetch('https://jsonplaceholdertypicode.com/todos');
    // const data = await response.json()
    // return data.map(({ id }) => {
    //     ({ blog: `${id}` })
    // })
    return [
        { blog: '1' },
        { blog: '2' },
        { blog: '3' },
        { blog: '4' },
        { blog: '5' }
    ]
}

const page = ({ params }) => {

    const { blog } = params;

    if (!/^\d+$/.test(blog)) {
        notFound();
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold font-mono mb-10">Welcome to Blog {blog} Page</h1>
        </div>
    )
}

export default page
