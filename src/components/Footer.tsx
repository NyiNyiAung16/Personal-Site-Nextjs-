"use client";

import Link from "next/link";
import ApplicationName from "./ApplicationName";
import Logo from "./Logo";      
import { usePathname } from "next/navigation";
import { isActiveLink } from "@/utils/isActiveLink";
import Image from "next/image";
import getAbsoluteUrl from "@/utils/getAbsoluteUrl";

type FooterProps = {
    copyright?: string;
    links?: {
        id: number;
        cta: {
            href: string;
            body: string;
        };
        image: {
            name: string;
            url: string;
        }
    }[];
    footerNav?: {
        id: number;
        links: {
            id: number;
            href: string;
            body: string;
        }[];
    };
};


export default function Footer({ copyright, links, footerNav } : FooterProps) {
    const pathname = usePathname();

    return (
        <div className="bg-[#1D2128FF] pt-10 pb-5">
            <div className="widthBase px-2 sm:px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-white gap-4 md:gap-0">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <Logo/>
                        <ApplicationName/>
                    </div>

                    <ul className="flex flex-wrap gap-3 md:gap-10 text-center justify-center">
                        {footerNav && footerNav.links.map((link) => (
                            <li key={link.id} className={` link ${isActiveLink(link.href, pathname)}`}>
                                <Link href={link.href}>{link.body}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full h-[1px] bg-[#DEE1E6FF] my-4"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <p className="text-white text-sm text-center md:text-left">
                        © {new Date().getFullYear()} {copyright}
                    </p>
                    <ul className="flex gap-4 md:gap-5 text-sm mt-4 md:mt-0 text-white justify-center">
                        {links && links.map((link) => (
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
                </div>
            </div>
        </div>
    )
};