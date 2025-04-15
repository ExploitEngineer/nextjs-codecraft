import Link from 'next/link'

export default function ProductList() {

    const productId = 100;

    return (
        <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center font-mono font-medium text-white">
            <div className="text-center space-y-5">
                <h1 className="font-semibold text-white text-2xl mb-4">Product List</h1>
                <h3><Link className="px-6 py-2 font-semibold bg-green-600 rounded-lg" href='/products/1'>Product 1</Link></h3>
                <h3><Link className="px-6 py-2 font-semibold bg-green-600 rounded-lg" href='/products/2'>Product 2</Link></h3>
                <h3><Link className="px-6 py-2 font-semibold bg-green-600 rounded-lg" href='/products/3' replace>Product 3</Link></h3>
                <h3><Link className="px-6 py-2 font-semibold bg-green-600 rounded-lg" href={`products/${productId}`}>Product {productId}</Link></h3>
            </div>
            <Link className="px-6 py-2 font-semibold bg-sky-600 rounded-lg" href='/'>Home</Link>
        </div>
    );
};
