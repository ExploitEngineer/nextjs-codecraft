import { notFound } from "next/navigation";

export default function ReviewDetail({ params }: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    if (parseInt(params.reviewId) > 100) {
        notFound();
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <h1 className="font-semibold font-mono text-white text-2xl">Review {params.reviewId} for product {params.productId}</h1>
        </div>
    );
};
