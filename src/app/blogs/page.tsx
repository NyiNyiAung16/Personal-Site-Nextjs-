import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getPaginatedBlogs } from "@/data/actions";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | NyiNyiAung Blogs",
  description: "I will share my knowledge and experience through this blog.",
};

type Props = {
  searchParams: Promise<{ page: string }>;
};

export default async function BlogsPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const { data: blogsData, meta } = await getPaginatedBlogs(Number(page || 1));

  return (
    <div>
      <h2
        className="text-3xl font-bold text-neutral-900 dark:text-white text-center transition-colors duration-300 mb-4"
        style={{ fontFamily: "Archivo" }}
      >
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 justify-items-center">
        {blogsData &&
          blogsData.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>

      <div className="mt-10">
        <Pagination
          pageNumber={Number(meta?.pagination.page)}
          pageCount={Number(meta?.pagination.pageCount)}
          total={Number(meta?.pagination.total)}
        />
      </div>
    </div>
  );
}
