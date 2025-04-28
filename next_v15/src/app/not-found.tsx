export default function NotFound() {
    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <div className="font-mono space-y-5">
                <h1 className="text-white font-semibold text-2xl">Page Not Found</h1>
                <p className="text-base font-medium">Could not find requested resource!</p>
            </div>
        </div>
    );
}

