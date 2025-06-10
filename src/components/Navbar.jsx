"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { isActiveLink } from "@/utils/isActiveLink";
import Bars from "./Bars";
import { useState } from "react";
import BaseLink from "./BaseLink";
import DarkMode from "./DarkMode";
import ApplicationName from "./ApplicationName";

export default function Navbar({ logoName, logo, links }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  return (
    <div className="navbar shadow-sm">
      <div className="flex items-center justify-between w-full widthBase">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Logo logo={logo} />
            <ApplicationName name="NyiNyiAung"/>
          </div>
        </div>
        <div className="flex-none">
          <ul className="hidden sm:flex gap-4 sm:gap-6 text-base sm:text-lg">
            {links &&
              links.map((link) => (
                <li
                  key={link.id}
                  className={`${isActiveLink(
                    link.href,
                    pathname
                  )}`}
                >
                  <BaseLink href={link.href}>{link.body}</BaseLink>
                </li>
              ))}
            <li>
              <DarkMode />
            </li>
          </ul>

          {/* responsive links */}
          <div className="dropdown dropdown-end block sm:hidden">
            <div tabIndex={0} role="button">
              <Bars
                className="w-7 h-7 fill-base-content transition-colors duration-300"
                onClick={() => setIsActive(!isActive)}
              />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-30 p-2 bg-base-100 shadow-md"
            >
              {links &&
                links.map((link) => (
                  <li
                    key={link.id}
                    className={`${isActiveLink(
                      link.href,
                      pathname
                    )}  `}
                  >
                    <BaseLink href={link.href}>{link.body}</BaseLink>
                  </li>
                ))}
              <li>
                <DarkMode />
              </li>
            </ul>
          </div>

          {/* <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
            <Bars
              className="w-7 h-7 fill-neutral-900 dark:fill-white transition-colors duration-300"
              onClick={() => setIsActive(!isActive)}
            />
          </button>

          <ul className="dropdown menu w-30 rounded-box bg-base-100 shadow-sm"
            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } }>
            {links &&
                links.map((link) => (
                  <li
                    key={link.id}
                    className={`${isActiveLink(
                      link.href,
                      pathname
                    )} text-neutral-900 dark:text-white transition-colors duration-300`}
                  >
                    <BaseLink href={link.href}>{link.body}</BaseLink>
                  </li>
                ))}
              <li>
                <DarkMode />
              </li>
          </ul> */}

        </div>
      </div>
    </div>
  );
}
