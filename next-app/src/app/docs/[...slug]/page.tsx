export default function Docs({ params }: {
    params: {
        slug: string[];
    };
}) {
    if (params.slug.length === 2) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <h1 className="font-semibold font-mono text-white text-2xl">Viewing docs for feature {params.slug[0]} & concept {params.slug[1]}</h1>
            </div>
        );
    } else if (params.slug.length === 1) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <h1 className="font-semibold font-mono text-white text-2xl">Viewing docs for feature {params.slug[0]}</h1>
            </div>
        );
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center" >
            <h1 className="font-semibold font-mono text-white text-2xl">Viewing docs for feature {params.slug[0]}</h1>
        </div >
    );
};
