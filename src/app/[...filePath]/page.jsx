const File = async ({ params }) => {

    const { filePath } = await params;

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <h1 className="text-white font-mono font-semibold text-2xl">File /{filePath.join("/")}</h1>
        </div>
    )
}

export default File;
