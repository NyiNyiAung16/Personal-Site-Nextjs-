import RandomBlogs from "@/components/RandomBlogs";
import { getBlog } from "@/data/actions";
import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import { Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params } : Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { data: blog } = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.description
  }
}

export default async function BlogDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const { data: blog } = await getBlog(slug);

  return (
      <div className="bg-base-100 min-h-screen transition-colors duration-300">
        <div>
          <h1
            className="text-2xl sm:text-3xl text-center my-6 text-base-content font-bold"
            style={{ fontFamily: "Archivo" }}
          >
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center my-8 sm:my-10 gap-4">
            <div className="text-center sm:text-left">
              <h5 className="text-md text-base-content font-semibold">
                By {blog.authorName}
              </h5>
              <p className="text-base-content/70">
                - Published on {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
            <Image
              src={getAbsoluteUrl(blog.authorImage?.url)}
              alt={blog.authorImage.name}
              width={100}
              height={100}
              className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-xl object-cover bg-base-100 transition-colors duration-300"
            />
          </div>

          <div>
            <h2
              className="text-lg sm:text-xl text-base-content mt-2 transition-colors duration-300"
              style={{ fontFamily: "Archivo", lineHeight: "28px" }}
            >
              <Markdown>{blog.description}</Markdown>
            </h2>
            <Image
              src={getAbsoluteUrl(blog.image?.url)}
              alt={blog.image.name}
              width={1176}
              height={503}
              className="w-full h-auto rounded-md object-cover mt-6 bg-base-100 transition-colors duration-300"
              sizes="(max-width: 768px) 100vw, 1176px"
              priority
            />
          </div>
        </div>

        <div className="my-12 sm:my-16 md:my-20">
          <h2
            className="text-2xl sm:text-3xl font-bold text-base-content text-center transition-colors duration-300"
            style={{ fontFamily: "Archivo" }}
          >
            Related Blogs
          </h2>
          <RandomBlogs />
        </div>
      </div>
  );
}
