import { getAboutPageContent } from "@/data/actions";
import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'About'
}

type itemType = {
  id: string;
  title: string;
  description: string;
};

type mtdType = {
  id: string;
  devName: string;
  devPosition: string;
  image: {
    url: string;
    name: string;
  };
};


export default async function AboutPage() {
  const { data: aboutData } = await getAboutPageContent();

  return (
    <div>
      {aboutData.td &&
        aboutData.td.map((item: itemType) => (
          <div key={item.id} className="py-2 sm:py-4 md:py-6">
            <h3
              className="text-xl sm:text-2xl md:text-3xl text-center py-3 sm:py-4 md:py-6 text-base-content font-bold"
              style={{ fontFamily: "Archivo" }}
            >
              {item.title}
            </h3>

            <p className="text-base-content/70 text-center text-sm sm:text-base lg:text-lg px-1 sm:px-4">
              {item.description}
            </p>
          </div>
        ))}

      <div className="py-6 sm:py-8">
        <h3
          className="text-xl sm:text-2xl md:text-3xl text-center py-3 sm:py-4 md:py-6 text-base-content font-bold"
          style={{ fontFamily: "Archivo" }}
        >
          Meet the Developer
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {aboutData.mtd &&
            aboutData.mtd.map((item: mtdType) => (
              <div
                key={item.id}
                className="card w-full sm:w-[340px] max-w-[276px] sm:max-w-[340px] bg-base-100 shadow-md mx-auto"
              >
                <div className="card-body items-center p-4 flex flex-col gap-2">
                  <Image
                    src={getAbsoluteUrl(item.image?.url)}
                    alt={item.image.name}
                    width={100}
                    height={100}
                    className="w-full max-w-[244px] sm:max-w-[300px] h-auto rounded-xl mx-auto"
                  />
                  <h5 className="card-title text-base sm:text-lg text-base-content font-bold text-center mt-2">
                    {item.devName}
                  </h5>
                  <p className="text-base-content/70 text-center text-sm sm:text-base">
                    {item.devPosition}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
