import { notFound } from "next/navigation";

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
