import { Blog } from "@/types/blog";
import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import Image from "next/image";
import Link from "next/link";
import removeMd from "remove-markdown";

export default function BlogCard({ blog }: { blog: Blog }) {
  const plainText = removeMd(blog.description);

  return (
    <>
      <div className="card max-w-96 shadow-lg hover:scale-105 transition-transform duration-300">
        <figure>
          <Image
            src={getAbsoluteUrl(blog.image?.url)}
            alt={blog.image.name}
            width={344}
            height={162}
            className="w-[344px] h-[200px] object-cover object-left-top rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p>{plainText.substring(0, 150)}...</p>
          <div className="card-actions">
            <Link
              className="btn btn-outline btn-block btn-primary rounded-md"
              href={`/blogs/${blog.documentId}`}
            >
              {blog?.cta?.body ?? "Read More"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
