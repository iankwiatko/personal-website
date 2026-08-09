import type { TagName } from "./tagData";

export type Project = {
  title: string;
  description: string;
  tech: TagName[];
  links: Array<{
    label: string;
    href: string;
    icon: "code" | "link";
  }>;
};

export const projects: Project[] = [
  {
    title: "RidePare",
    description:
      "RidePare is an attempt to improve mobility efficiency, accessibility and sustainability in our community by providing fare and journey information for various rideshare programs such as Uber, Lyft, Lime and CitiBikes. This project was made in 24 hour for the 2024 Hack OH/IO Event, and was built using React for the frontend and Express for the backend, incorporating some Google and OpenSource APIs for address, distance, routing and map generation.",
    tech: ["react", "express", "vercel"],
    links: [
      {
        label: "source code",
        href: "https://github.com/iankwiatko/ridepare",
        icon: "code",
      },
      {
        label: "ridepare.com",
        href: "https://ridepare.com",
        icon: "link",
      },
    ],
  },
  {
    title: "Schedule Master",
    description:
      "Schedule Master is a interactive schedule made for my college senior year mobile applications class at OSU. It allows users to create an account and add various tasks with tags, priority, a description and various other attributes that can be manipulated after the task is created. This project was built with Kotlin for the user interface, Firebase for the backend database and authentication, and was tested using automated unit tests and UI tests built with JUnit.",
    tech: ["kotlin", "firebase", "junit"],
    links: [
      {
        label: "source code",
        href: "https://github.com/iankwiatko/schedulemaster",
        icon: "code",
      },
    ],
  },
];
