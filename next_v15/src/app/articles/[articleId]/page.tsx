'use client';

import Link from 'next/link';
import { use } from 'react';

export default function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {

    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);

    return (
        <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
            <div className="!text-white">
                <h1 className="text-white font-semibold text-2xl">News article {articleId}</h1>
                <p>Reading in {lang}</p>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>French</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>Spanish</Link>
            </div>
        </div>
    );
}
