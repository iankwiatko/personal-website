import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { useTheme } from "./useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`fixed top-4 left-4 z-20 hidden h-10 w-10 items-center justify-center rounded-lg border-0 bg-transparent p-0 text-slate-700 transition-[background-color,opacity,translate,box-shadow] duration-200 ease-[ease] hover:bg-white/90 hover:shadow-sm focus-visible:outline-none focus-visible:bg-white/90 focus-visible:shadow-sm sm:inline-flex dark:text-slate-200 dark:hover:bg-slate-900/90 dark:focus-visible:bg-slate-900/90 ${isHidden ? "pointer-events-none -translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-hidden={isHidden}
      tabIndex={isHidden ? -1 : 0}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
