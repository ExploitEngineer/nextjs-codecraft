'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { Button } from '@/components/ui/button';
import { usePathname } from "next/navigation";
import Link from 'next/link';
import "@/app/assets/css/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const navLinks = [
    { name: "Register", href: '/register' },
    { name: "Login", href: '/login' },
    { name: 'Forgot Password', href: '/forgot-password' }
]


export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >

                {
                    navLinks.map((elem, key) => {

                        const isActive = pathname === elem.href || (pathname.startsWith(elem.href) && elem.href !== "/");

                        return (
                            <Link replace key={key} href={elem.href}>
                                <Button className={isActive ? "font-bold mr-4 bg-zinc-700 py-6 text-lg" : "text-blue-500 mr-4 bg-zinc-700 py-6 text-lg"}>{elem.name}</Button>
                            </Link>
                        )
                    })
                }
                {children}
                <footer className='w-full py-8 bg-linear-90 to-purple-500 from-blue-500 flex items-center justify-center text-white font-semibold font-mono text-2xl'>Footer</footer>
            </body>
        </html>
    );
}
