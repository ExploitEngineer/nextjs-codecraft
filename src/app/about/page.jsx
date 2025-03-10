import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold font-mono mb-10">Welcome to About Page...</h1>
            <div className="flex items-center gap-10">
                <Link href="/" className='decoration-0 text-lime-400 font-semibold text-lg'>Home</Link>
                <Link href="/services" className='decoration-0 text-lime-400 font-semibold text-lg'>Services</Link>
            </div>
        </div>
    )
}

export default About
