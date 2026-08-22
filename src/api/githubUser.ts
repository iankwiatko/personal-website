import type { githubUserData } from "../types/githubUserData.ts";

export async function fetchGitHubUser() {
  const githubUserResponse = await fetch(
    "https://api.github.com/users/iankwiatko",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!githubUserResponse.ok) {
    throw new Error("Unable to load GitHub profile");
  }

  return (await githubUserResponse.json()) as githubUserData;
}
