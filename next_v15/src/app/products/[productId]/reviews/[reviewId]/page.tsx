import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview({ params }: {
    params: Promise<{ productId: string; reviewId: string }>;
}) {

    const random = getRandomInt(2);
    if (random === 1) {
        throw new Error("Error loading review");
    }
    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        notFound();
    }

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">Review {reviewId} for product {productId}</h1>
        </div>
    );
}
