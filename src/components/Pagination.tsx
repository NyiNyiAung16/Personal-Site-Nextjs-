"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type PaginationProps = {
  pageNumber: number;
  pageCount: number;
  total: number;
};

export default function Pagination({
  pageNumber,
  pageCount,
  total,
}: PaginationProps) {
  const [page, setPage] = useState(pageNumber || 0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage < 0) return; // Prevent going to negative pages
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", newPage.toString());
      router.push(`?${params.toString()}`);
    },
    [router, searchParams]
  );

  useEffect(() => {
    handlePageChange(page);
  }, [page, handlePageChange]);

  return (
    <div className="flex items-center justify-between border-t border-base-200 bg-base-100 px-4 py-3 sm:px-6 transition-colors duration-300">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-md border border-base-300 bg-base-100 px-4 py-2 text-sm font-medium text-base-content hover:bg-base-200 cursor-pointer transition-colors duration-200"
          onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : 0))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-base-300 bg-base-100 px-4 py-2 text-sm font-medium text-base-content hover:bg-base-200 cursor-pointer transition-colors duration-200"
          onClick={() =>
            setPage((prev) => (prev < pageCount ? prev + 1 : prev))
          }
          disabled={page === pageCount}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-base-content transition-colors duration-200">
            Showing
            <span className="font-medium px-1">{pageNumber}</span>
            to
            <span className="font-medium px-1">{pageCount}</span>
            of
            <span className="font-medium px-1">{total}</span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex rounded-md shadow-xs"
            aria-label="Pagination"
          >
            <button
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-base-content ring-1 ring-base-300 ring-inset hover:bg-base-200 focus:z-20 focus:outline-offset-0 ${
                page === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              } transition-colors duration-200`}
              onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : 0))}
              disabled={page === 1}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {pages.map((page, index) => (
              <div
                key={index}
                aria-current="page"
                className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer
                    ${
                      page === pageNumber
                        ? "bg-primary text-primary-content"
                        : "text-base-content ring-1 ring-base-300 ring-inset hover:bg-base-200"
                    } transition-colors duration-200`}
                onClick={() => setPage(page)}
              >
                {page}
              </div>
            ))}
            <button
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-base-content ring-1 ring-base-300 ring-inset hover:bg-base-200 focus:z-20 focus:outline-offset-0 ${
                page == pageCount ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              } transition-colors duration-200`}
              onClick={() =>
                setPage((prev) => (prev < pageCount ? prev + 1 : prev))
              }
              disabled={page === pageCount}
            >
              <span className="sr-only">Next</span>
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
