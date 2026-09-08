import type { githubUserData } from "../types/githubUserData.ts";

const GITHUB_USERNAME = "iankwiatko";
const HEADERS = { Accept: "application/vnd.github+json" };

export async function fetchGitHubUser() {
  const githubUserResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    { headers: HEADERS },
  );

  if (!githubUserResponse.ok) {
    throw new Error("Unable to load GitHub profile");
  }

  return (await githubUserResponse.json()) as githubUserData;
}
