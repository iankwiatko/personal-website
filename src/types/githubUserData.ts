import type { GithubContributionData } from "./githubContributionData.ts";
import type { githubCommitData } from "./githubCommitData.ts";

export type githubUserData = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  recentCommits: githubCommitData[];
  contributions: GithubContributionData[];
  contributionsUnavailable: boolean;
};
