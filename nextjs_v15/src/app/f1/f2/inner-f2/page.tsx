import Link from "next/link";

export default function InnerF2() {
  return (
    <>
      <h2>Inner F2 Page</h2>

      <Link className="text-sm text-blue-600 underline" href="/f5">
        F5
      </Link>
    </>
  );
}
