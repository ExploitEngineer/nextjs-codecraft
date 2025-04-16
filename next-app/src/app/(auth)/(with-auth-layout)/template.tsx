'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
    { name: 'Register', href: '/register' },
    { name: "Login", href: '/login' }
];

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const pathname = usePathname();
    const [input, setInput] = useState("");

    return (
        <div>
            <input className="px-4 border-2 border-white rounded-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <div>
                {
                    navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href)
                        return (
                            <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
                        )
                    })
                }
            </div>
            <h2>Inner Layout</h2>
            {children}
        </div>
    );
};
