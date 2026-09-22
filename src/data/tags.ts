export const tag = {
  react: {
    label: "React.JS",
    colorClass: "border-sky-400/20 bg-sky-500/10 text-sky-200",
  },
  express: {
    label: "Express.JS",
    colorClass: "border-amber-400/20 bg-amber-500/10 text-amber-200",
  },
  vercel: {
    label: "Vercel",
    colorClass: "border-indigo-400/20 bg-indigo-500/10 text-indigo-200",
  },
  typescript: {
    label: "TypeScript",
    colorClass: "border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
  },
  kotlin: {
    label: "Kotlin",
    colorClass: "border-purple-400/20 bg-purple-500/10 text-purple-200",
  },
  firebase: {
    label: "Firebase",
    colorClass: "border-red-400/20 bg-red-500/10 text-red-200",
  },
  junit: {
    label: "JUnit",
    colorClass: "border-green-400/20 bg-green-500/10 text-green-200",
  },
  python: {
    label: "Python",
    colorClass: "border-blue-400/20 bg-blue-500/10 text-blue-200",
  },
} as const;

export type TagName = keyof typeof tag;
