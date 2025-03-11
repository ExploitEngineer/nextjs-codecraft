const page = ({ params }) => {

    const { comment } = params;

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <h1 className="text-white font-semibold font-mono text-2xl">Comment No: {comment}</h1>
        </div>
    )
}

export default page
