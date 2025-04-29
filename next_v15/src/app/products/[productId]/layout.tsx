export default function ProductDetailsLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h1 className="text-white font-semibold font-mono text-2xl">Featured Products</h1>
        </>
    );
}
