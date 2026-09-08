import type { GithubCommitResponse } from "../types/githubCommitResponse.ts";
import type { GithubEvent } from "../types/githubEventData.ts";
import type { githubCommitData } from "../types/githubCommitData.ts";

const GITHUB_USERNAME = "iankwiatko";
const HEADERS = { Accept: "application/vnd.github+json" };

async function fetchCommit(
  repo: string,
  sha: string,
): Promise<githubCommitData | null> {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/commits/${sha}`,
    { headers: HEADERS },
  );

  if (!response.ok) return null;

  const commit = (await response.json()) as GithubCommitResponse;
  return {
    message: commit.commit.message.split("\n")[0],
    sha: commit.sha,
    url: commit.html_url,
    repository: repo,
  };
}

export async function fetchGitHubCommits(): Promise<githubCommitData[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events/public`,
    { headers: HEADERS },
  );

  if (!response.ok) return [];

  const events = (await response.json()) as GithubEvent[];

  const recentPushes = events
    .filter(
      (event) =>
        event.type === "PushEvent" && event.repo?.name && event.payload?.head,
    )
    .sort(
      (firstEvent, secondEvent) =>
        new Date(secondEvent.created_at).getTime() -
        new Date(firstEvent.created_at).getTime(),
    )
    .slice(0, 3);

  const commits = await Promise.all(
    recentPushes.map((event) =>
      fetchCommit(event.repo!.name, event.payload!.head!),
    ),
  );

  return commits.filter((commit) => commit !== null);
}
