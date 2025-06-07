import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import Link from "next/link";

type HeroSectionProps = {
  title: string;
  description: string;
  link: {
    body: string;
    href: string;
  };
  videoUrl: string;
}

export default function HeroSection( data : HeroSectionProps) {
  return (
    <div className="max-w-screen min-h-[87.2vh] py-6 px-2 sm:px-4 md:px-8">
      <div className="mb-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-neutral-900 dark:text-white transition-colors duration-300"
            style={{ fontFamily: 'Archivo' }}
          >
            { data.title }
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center text-neutral-700 dark:text-neutral-300 transition-colors duration-300">
            { data.description}
          </p>
        </div>
        <div className="flex justify-center mt-7">
          <Link href={data.link.href} className="button px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 dark:bg-[#23272f] dark:text-white transition-colors duration-300">
            {data.link.body}
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="relative aspect-video w-full">
          <video
            controls
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg bg-white dark:bg-[#23272f] transition-colors duration-300"
          >
            <source src={getAbsoluteUrl(data.videoUrl)} type="video/mp4"/>
            Sorry, your browser does not support the video tag, but you can <a href={getAbsoluteUrl(data.videoUrl)} className="text-blue-500 underline">download the video</a> instead.
          </video>
        </div>
      </div>
    </div>
  );
}
