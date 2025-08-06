import Link from "next/link";

export default function F2() {
  return (
    <>
      <h2>F2 Page</h2>

      <Link className="text-sm text-blue-600 underline" href="/f4">
        F4
      </Link>
    </>
  );
}
