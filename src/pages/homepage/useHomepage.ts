import { fetchGitHubCommits } from "../../api/githubCommit.ts";
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

  if (githubUserQuery.error) {
    console.error("Failed to load GitHub profile", githubUserQuery.error);
  }
  if (githubCommitsQuery.error) {
    console.error("Failed to load GitHub commits", githubCommitsQuery.error);
  }

  return {
    githubUserData: githubUserQuery.data
      ? {
          ...githubUserQuery.data,
          recentCommits: githubCommitsQuery.data ?? [],
        }
      : null,
    isLoading: githubUserQuery.isLoading || githubCommitsQuery.isLoading,
  };
}
