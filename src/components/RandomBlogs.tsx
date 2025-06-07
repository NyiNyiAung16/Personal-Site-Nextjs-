import { getBlogs } from "@/data/actions";
import BlogCard from "./BlogCard";
import { Blog } from "@/types/blog";

export default async function RandomBlogs() {
  const { data: blogs } = await getBlogs();
  const shuffled = blogs.sort(() => 0.5 - Math.random());
  const randomBlogs = shuffled.slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 justify-items-center">
      {randomBlogs.map((blog: Blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
