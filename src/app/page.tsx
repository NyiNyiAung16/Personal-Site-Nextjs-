import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/Hero";
import { getBlogs, getHomePageContent } from "@/data/actions";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blogs | Home',
  description: "I will share my knowledge and experience through this blog.",
};


export default async function Home() {
  const data = await getHomePageContent();
  const { data: blogsData } = await getBlogs();
  const heroData = data.data.heroSection;


  return (
    <div>
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        videoUrl={heroData.video?.url}
        link={heroData.link}
      />
      <div className="my-12 sm:my-16 md:my-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white text-center" style={{ fontFamily: 'Archivo'}}>
         Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center mt-4">
          {blogsData.slice(0, 6).map((blog: Blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
