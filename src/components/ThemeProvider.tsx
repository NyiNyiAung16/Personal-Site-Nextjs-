"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return children;
}
