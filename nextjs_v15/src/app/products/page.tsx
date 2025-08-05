import Link from "next/link";

export default function ProductList() {
  const productId: number = 100;

  return (
    <>
      <Link className="underline text-blue-600 font-mono text-sm" href="/">
        home
      </Link>
      <h1>Product List</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}
