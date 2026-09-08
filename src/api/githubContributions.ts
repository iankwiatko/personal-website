import type { GithubContributionData } from "../types/githubContributionData.ts";

const GITHUB_USERNAME = "iankwiatko";
const HEADERS = { Accept: "application/vnd.github+json" };

type GithubContributionsResponse = {
  contributions?: GithubContributionData[];
};

export async function fetchGitHubContributions(): Promise<
  GithubContributionData[]
> {
  const githubContributionsResponse = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    { headers: HEADERS },
  );

  if (!githubContributionsResponse.ok) {
    throw new Error("Unable to load GitHub contributions");
  }

  const githubContributions =
    (await githubContributionsResponse.json()) as GithubContributionsResponse;
  return githubContributions.contributions ?? [];
}
