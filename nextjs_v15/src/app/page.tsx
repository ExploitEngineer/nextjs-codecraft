import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <div className="flex font-mono text-sm gap-2">
        <Link className="underline text-blue-600" href="/blog">
          Blog
        </Link>
        <Link className="underline text-blue-600" href="/products">
          Products
        </Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      </div>
    </>
  );
}
