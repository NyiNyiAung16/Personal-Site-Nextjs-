import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

type HeroSectionProps = {
  title: string;
  description: string;
  link: {
    body: string;
    href: string;
  };
  videoUrl: string;
};

export default function HeroSection(data: HeroSectionProps) {
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content flex-col-reverse gap-10 lg:flex-row-reverse w-full max-w-7xl mx-auto">
        <div className="w-full max-w-xl">
          <video
            controls
            className="w-full h-full object-cover rounded-lg shadow-lg"
          >
            <source src={getAbsoluteUrl(data.videoUrl)} type="video/mp4" />
            Sorry, your browser does not support the video tag, but you can{" "}
            <a
              href={getAbsoluteUrl(data.videoUrl)}
              className="text-blue-500 underline"
            >
              download the video
            </a>{" "}
            instead.
          </video>
        </div>
        <div className="w-full max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {data.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl  py-4">
            {data.description}
          </p>
          <Link
            href={data.link.href}
            className="btn btn-dash btn-lg btn-primary"
          >
            {data.link.body} 
            <ArrowRight/>
          </Link>
        </div>
      </div>
    </div>
  );
}
