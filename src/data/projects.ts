import type { TagName } from "./tags";

export type Project = {
  title: string;
  description: string;
  tech: TagName[];
  links: Array<{
    label: string;
    href: string | undefined;
    icon: "code" | "link" | "indev";
  }>;
};

export const projects: Project[] = [
  {
    title: "Sleeperdex",
    description:
      "Sleeperdex is a web application designed to help collectors find value in their bulk trading cards. It allows users to organize cards by set and set a minimum price in order to filter out cards that may have hidden value. This project was built using React and hosted on Vercel, like many of my other projects. The goal of this project was to gain experience using public APIs while also gaining exposure to the challenges involved with handling large amounts of data efficiently. I explored various methods for optimizing performance, including memoization, query batching, caching, and best practices such as ensuring runtime type safety, virtualization of large data such as images, and efficient state management using tanstack/react-query.",
    tech: ["react", "vercel", "typescript"],
    links: [
      {
        label: "In Development",
        href: undefined,
        icon: "indev",
      },
      {
        label: "source code",
        href: "https://github.com/iankwiatko/sleeperdex",
        icon: "code",
      },
    ],
  },
  {
    title: "RidePare",
    description:
      "RidePare is an attempt to improve mobility efficiency, accessibility and sustainability in our community by providing fare and journey information for various rideshare programs such as Uber, Lyft, Lime and CitiBikes. This project was made in 24 hour for the 2024 Hack OH/IO Event, and was built using React for the frontend and Express for the backend, incorporating some Google and OpenSource APIs for address, distance, routing and map generation.",
    tech: ["react", "vercel", "express"],
    links: [
      {
        label: "ridepare.com",
        href: "https://ridepare.com",
        icon: "link",
      },
      {
        label: "source code",
        href: "https://github.com/iankwiatko/ridepare",
        icon: "code",
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
