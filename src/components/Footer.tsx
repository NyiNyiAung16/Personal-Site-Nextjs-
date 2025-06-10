"use client";

import Link from "next/link";
import Image from "next/image";
import getAbsoluteUrl from "@/utils/getAbsoluteUrl";

type FooterProps = {
  links?: {
    id: number;
    cta: {
      href: string;
      body: string;
    };
    image: {
      name: string;
      url: string;
    };
  }[];
logoName?: string;
logoImage?: {
    name: string;
    url: string;
};
};

export default function Footer({ links, logoName, logoImage }: FooterProps) {

  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 p-10">
      <aside>
        <Image
            src={getAbsoluteUrl(logoImage?.url || "/coding.svg")}
            width={50}
            height={50}
            alt={logoName || "Logo"}
            className="rounded-full"
        />
        <p className="font-bold">
        {logoName}
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <ul className="grid grid-flow-col gap-4">
          {links &&
            links.map((link) => (
              <li key={link.id} className="hover:scale-110 duration-200">
                <Link href={link.cta.href} target={"_blank"}>
                  <Image
                    src={getAbsoluteUrl(link.image.url)}
                    width={30}
                    height={30}
                    alt={link.image.name}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </footer>
  );
}
