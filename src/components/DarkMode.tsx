"use client";

import CloudMoon from "@/components/CloudMoon";
import CloudSun from "@/components/CloudSun";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");
 
  useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = event.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  
  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        value="synthwave"
        checked={theme === "dark"}
        data-toggle-theme="dark,light"
        onChange={handleThemeChange}
      />
      <CloudSun className="swap-on" />
      <CloudMoon className="swap-off" />
    </label>
  );
}
