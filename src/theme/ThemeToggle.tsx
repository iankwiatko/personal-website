import { Moon, Sun } from "lucide-react";

import { useTheme } from "./useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring fixed top-4 left-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent text-slate-700 transition hover:border-slate-900/10 hover:bg-white/90 hover:shadow-sm dark:text-slate-200 dark:hover:border-white/10 dark:hover:bg-slate-900/90"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
