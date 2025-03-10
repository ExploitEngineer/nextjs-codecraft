import React from 'react'
import Link from 'next/link';

const Services = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold font-mono mb-10">Welcome to Services Page...</h1>
            <div className="flex items-center gap-10">
                <Link href="/services/web-dev" className='decoration-0 text-lime-400 font-semibold text-lg'>Web Development</Link>
                <Link href="/services/app-dev" className='decoration-0 text-lime-400 font-semibold text-lg'>App Development</Link>
                <Link href="/services/game-dev" className='decoration-0 text-lime-400 font-semibold text-lg'>Game Development</Link>
                <Link href="/services/system-des" className='decoration-0 text-lime-400 font-semibold text-lg'>System Design</Link>
            </div>
        </div>
    )
}

export default Services;
