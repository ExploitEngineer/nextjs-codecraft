"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Links {
  name: string;
  href: string;
}

const navLinks: Links[] = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname: string = usePathname();

  return (
    <div>
      <div className="flex items-center gap-2 py-10 font-mono">
        <h1 className="font-semibold text-white">Navbar Links:</h1>
        {navLinks.map((link: Links, idx: number) => {
          const isActive = pathname === link.href;
          return (
            <Link key={idx} href={link.href}>
              <h3
                className={`${isActive ? "font-bold text-yellow-500" : "underline text-sky-600"} text-sm`}
              >
                {link.name}
              </h3>
            </Link>
          );
        })}
      </div>
      <h2>Auth layouts</h2>
      {children}
    </div>
  );
}
