export default function NotFound() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-white animate-pulse drop-shadow-lg">
                    404
                </h1>
                <h2 className="mt-4 text-3xl font-semibold text-white drop-shadow-lg">
                    Page Not Found
                </h2>
                <p className="mt-2 text-lg text-gray-200">
                    Oops! The page you are looking for does not exist.
                </p>
                <a
                    className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}
