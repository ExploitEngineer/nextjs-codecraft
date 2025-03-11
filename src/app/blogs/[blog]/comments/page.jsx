const page = ({ params }) => {

    const { blog } = params;

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-black font-mono font-semibold">{blog} Comments on blog page</h1>
        </div>
    )
}

export default page;
