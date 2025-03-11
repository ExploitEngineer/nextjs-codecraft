import Link from "next/link";

export default function Home(props) {

    console.log(props);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold font-mono mb-10">Welcome to Home Page</h1>
            <div className="flex items-center gap-10">
                <Link href="/about" className='decoration-0 text-lime-400 font-semibold text-lg'>About</Link>
                <Link href="/services" className='decoration-0 text-lime-400 font-semibold text-lg'>Services</Link>
            </div>
        </div>
    );
}
