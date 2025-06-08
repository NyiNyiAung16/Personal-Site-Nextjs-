"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { isActiveLink } from "@/utils/isActiveLink";
import Bars from "./Bars";
import { useState } from "react";
import BaseLink from "./BaseLink";
import DarkMode from "./DarkMode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export default function Navbar({ logoName, logo, links }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between items-center px-2 py-3 sm:px-4 sm:py-4 sticky top-0 z-50 bg-white dark:bg-[#1D2128FF] shadow-sm transition-colors duration-300">
      <div className="flex items-center gap-2">
        <Logo logo={logo} />
        <Link href="/">
          <h3 className="font-bold text-xl sm:text-2xl text-neutral-900 dark:text-white transition-colors duration-300">
            {logoName}
          </h3>
        </Link>
      </div>

      <ul className="hidden sm:flex gap-4 sm:gap-6 text-base sm:text-lg">
        {links &&
          links.map((link) => (
            <li
              key={link.id}
              className={` link ${isActiveLink(
                link.href,
                pathname
              )} text-neutral-900 dark:text-white transition-colors duration-300`}
            >
              <Link href={link.href}>{link.body}</Link>
            </li>
          ))}
        <li>
          <DarkMode />
        </li>
      </ul>

      {/* responsive links */}
      <div className="block sm:hidden relative">
        <Bars
          className="w-7 h-7 fill-neutral-900 dark:fill-white transition-colors duration-300"
          onClick={() => setIsActive(!isActive)}
        />
        {isActive && (
          <ul className="absolute top-12 right-0 min-w-[160px] flex flex-col gap-3 py-4 px-6 rounded-md shadow-lg bg-white dark:bg-[#1D2128FF] dark:text-white transition-all duration-200 shadow-md">
            {links &&
              links.map((link) => (
                <li key={link.id} className={isActiveLink(link.href, pathname)}>
                  <BaseLink href={link.href}>{link.body}</BaseLink>
                </li>
              ))}
            <li>
              <DarkMode />
            </li>
          </ul>
        )}
      </div>


    </div>
  );
}
