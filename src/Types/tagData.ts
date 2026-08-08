export const tag = {
  react: { label: "React.JS", colorClass: "bg-sky-600" },
  express: { label: "Express.JS", colorClass: "bg-amber-500" },
  vercel: { label: "Vercel", colorClass: "bg-indigo-600" },
  typescript: { label: "TypeScript", colorClass: "bg-sky-500" },
  kotlin: { label: "Kotlin", colorClass: "bg-purple-600" },
  firebase: { label: "Firebase", colorClass: "bg-red-500" },
  junit: { label: "JUnit", colorClass: "bg-green-500" },
} as const;

export type TagName = keyof typeof tag;
