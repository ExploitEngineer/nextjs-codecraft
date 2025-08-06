import Link from "next/link";

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link className="text-sm text-blue-600 underline" href="/f1/f2">
          F2
        </Link>
        <Link className="text-sm text-blue-600 underline" href="/f3">
          F3
        </Link>
      </div>
    </>
  );
}
