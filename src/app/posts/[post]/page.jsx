export default function page({ params }) {

    const { post } = params;

    return (
        <div className="w-full h-screen bg-black text-white font-mono text-3xl flex items-center justify-center">
            <h1>Post: {post}</h1>
        </div>
    )
}
