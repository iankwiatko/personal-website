import { fetchGitHubCommits } from "../../api/githubCommit.ts";
import { fetchGitHubContributions } from "../../api/githubContributions.ts";
import { fetchGitHubUser } from "../../api/githubUser.ts";
import { useQuery } from "@tanstack/react-query";

export function useGithubUser() {
  const githubUserQuery = useQuery({
    queryKey: ["githubUser", "iankwiatko"],
    queryFn: fetchGitHubUser,
  });
  const githubCommitsQuery = useQuery({
    queryKey: ["githubCommits", "iankwiatko"],
    queryFn: fetchGitHubCommits,
  });
  const githubContributionsQuery = useQuery({
    queryKey: ["githubContributions", "iankwiatko"],
    queryFn: fetchGitHubContributions,
  });

  if (githubUserQuery.error) {
    console.error("Failed to load GitHub profile", githubUserQuery.error);
  }
  if (githubCommitsQuery.error) {
    console.error("Failed to load GitHub commits", githubCommitsQuery.error);
  }
  if (githubContributionsQuery.error) {
    console.error(
      "Failed to load GitHub contributions",
      githubContributionsQuery.error,
    );
  }

  return {
    githubUserData: githubUserQuery.data
      ? {
          ...githubUserQuery.data,
          recentCommits: githubCommitsQuery.data ?? [],
          contributions: githubContributionsQuery.data ?? [],
        }
      : null,
    isLoading:
      githubUserQuery.isLoading ||
      githubCommitsQuery.isLoading ||
      githubContributionsQuery.isLoading,
  };
}
