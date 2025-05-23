"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "切換到深色模式" : "切換到淺色模式"}
    >
      {/* 在深色主題顯示太陽圖標，淺色主題顯示月亮圖標 */}
      {theme === "dark" ? <BsSun className="text-white" /> : <BsMoon />}
    </button>
  );
}
