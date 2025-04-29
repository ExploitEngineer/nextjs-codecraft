import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        })
    })
    return {
        title: `Product ${title}`
    }
}

export default async function ProductDetails({ params }: Props) {

    const productId = (await params).productId;

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <h1 className="text-white font-semibold text-2xl">Details about product {productId}</h1>
        </div>
    );
}
