"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Global Error:", error);
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href={'/coding.svg'}
          type="image/x-icon"
        />
      </head>
      <body className="bg-white dark:bg-[#181A20] min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="max-w-md w-full mx-auto text-center p-6 rounded-lg shadow bg-white dark:bg-[#23272f]">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            An unexpected error occurred.
          </p>
          <button
            onClick={reset}
            className="px-5 py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-[#23272f] transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
