export default async function ProductDetails({ params }: {
    params: Promise<{ productId: string }>;
}) {

    const productId = (await params).productId;

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">Details about product {productId}</h1>
        </div>
    );
}
