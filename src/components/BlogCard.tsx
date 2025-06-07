import { Blog } from "@/types/blog";
import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import Image from "next/image";
import Link from "next/link";
import removeMd from "remove-markdown";


export default function BlogCard({ blog }: { blog: Blog }) {

  const plainText = removeMd(blog.description);

  return (
    <div className="flex flex-col justify-between shadow-sm rounded-lg hover:shadow-lg p-4 max-w-[376px] transition-all duration-300 bg-white dark:bg-[#1D2128FF]">
      <div>
        <Image
          src={getAbsoluteUrl(blog.image.url)}
          alt={blog.image.name}
          width={344}
          height={162}
          className="w-[344px] h-[162px] object-cover object-left-top rounded-lg"
        />
      </div>
      <div className="mt-2 space-y-1">
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{blog.title}</h4>
        <p className="text-neutral-500 dark:text-neutral-300 font-[400]">
          {plainText.substring(0, 150)}...
        </p>
      </div>
      <Link
        className="button text-center w-full mt-3 dark:bg-[#181A20] dark:text-white transition-colors duration-300"
        href={`/blogs/${blog.documentId}`}
      >
        {blog?.cta?.body ?? "Read More"}
      </Link>
    </div>
  );
}
