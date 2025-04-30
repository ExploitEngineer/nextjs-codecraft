'use client';

export default function ErrorBoundry({ error }: {
    error: Error
}) {
    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">{error.message}</h1>
        </div>
    );
}
