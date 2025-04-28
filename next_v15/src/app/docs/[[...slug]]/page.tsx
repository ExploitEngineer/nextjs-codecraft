export default async function Docs({ params }: {
    params: Promise<{ slug: string[] }>;
}) {

    const { slug } = await params;
    if (slug?.length === 2) {
        return <h1 className="text-white font-semibold text-2xl">Viewing docs for feature {slug[0]} & concpet {slug[1]}</h1>
    } else if (slug?.length === 1) {
        return <h1 className="text-white font-semibold text-2xl">Viewing docs for feature {slug[0]}</h1>
    }
    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">Docs home page</h1>
        </div>
    );
}
