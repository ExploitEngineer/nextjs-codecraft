export default function ProductDetails({ params }: { params: { productId: string } }) {

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <h1 className="font-semibold font-mono text-white text-2xl">Details about product {params.productId}</h1>
        </div>
    );
};
