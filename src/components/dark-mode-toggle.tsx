"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))} className="h-6 w-6">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default DarkModeToggle;
