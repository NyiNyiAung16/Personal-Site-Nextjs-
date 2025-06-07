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
      <div>
        <div>
          <h1
            className="text-2xl sm:text-3xl text-center my-6 text-neutral-900 dark:text-white transition-colors duration-300"
            style={{ fontFamily: "Archivo" }}
          >
            {blog.title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center my-8 sm:my-10 gap-4">
            <div className="text-center sm:text-left">
              <h5 className="text-md text-[#000000FF] dark:text-neutral-200">
                By {blog.authorName}
              </h5>
              <p className="text-[#565E6CFF] dark:text-neutral-400">
                - Published on {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
            <Image
              src={getAbsoluteUrl(blog.authorImage?.url)}
              alt={blog.authorImage.name}
              width={100}
              height={100}
              className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] rounded-xl object-cover bg-white dark:bg-[#23272f] transition-colors duration-300"
            />
          </div>

          <div>
            <h2
              className="text-lg sm:text-xl text-[#171A1FFF] dark:text-neutral-200 mt-2 transition-colors duration-300"
              style={{ fontFamily: "Archivo", lineHeight: "28px" }}
            >
              <Markdown>{blog.description}</Markdown>
            </h2>
            <Image
              src={getAbsoluteUrl(blog.image?.url)}
              alt={blog.image.name}
              width={1176}
              height={503}
              className="w-full h-auto rounded-md object-cover mt-6 bg-white dark:bg-[#23272f] transition-colors duration-300"
              sizes="(max-width: 768px) 100vw, 1176px"
              priority
            />
          </div>
        </div>

        <div className="my-12 sm:my-16 md:my-20">
          <h2
            className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white text-center transition-colors duration-300"
            style={{ fontFamily: "Archivo" }}
          >
            Related Blogs
          </h2>
          <RandomBlogs />
        </div>
      </div>
  );
}
