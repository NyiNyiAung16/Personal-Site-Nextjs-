import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">404</h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">Page Not Found</h2>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    The page you are looking for does not exist.
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8">
                    Please check the URL or return to the home page.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}