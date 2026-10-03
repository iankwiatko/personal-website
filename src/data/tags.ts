export const tag = {
  react: {
    label: "React.JS",
    colorClass:
      "border-sky-500/20 bg-sky-500/10 text-sky-700 dark:border-sky-400/20 dark:text-sky-200",
  },
  express: {
    label: "Express.JS",
    colorClass:
      "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:border-amber-400/20 dark:text-amber-200",
  },
  vercel: {
    label: "Vercel",
    colorClass:
      "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:border-indigo-400/20 dark:text-indigo-200",
  },
  typescript: {
    label: "TypeScript",
    colorClass:
      "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/20 dark:text-cyan-200",
  },
  kotlin: {
    label: "Kotlin",
    colorClass:
      "border-purple-500/20 bg-purple-500/10 text-purple-700 dark:border-purple-400/20 dark:text-purple-200",
  },
  firebase: {
    label: "Firebase",
    colorClass:
      "border-red-500/20 bg-red-500/10 text-red-700 dark:border-red-400/20 dark:text-red-200",
  },
  junit: {
    label: "JUnit",
    colorClass:
      "border-green-500/20 bg-green-500/10 text-green-700 dark:border-green-400/20 dark:text-green-200",
  },
  python: {
    label: "Python",
    colorClass:
      "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:border-blue-400/20 dark:text-blue-200",
  },
  alpaca: {
    label: "Alpaca",
    colorClass:
      "border-lime-500/20 bg-lime-500/10 text-lime-700 dark:border-lime-400/20 dark:text-lime-200",
  },
} as const;

export type TagName = keyof typeof tag;
