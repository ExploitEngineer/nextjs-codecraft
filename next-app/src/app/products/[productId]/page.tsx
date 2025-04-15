import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        })
    })

    return {
        title: `Product ${title}`
    };
};

export default function ProductDetails({ params }: { params: { productId: string } }) {

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <h1 className="font-semibold font-mono text-white text-2xl">Details about product {params.productId}</h1>
        </div>
    );
};
