import { fetchGitHubUser } from "../../api/githubUser.ts";
import { useQuery } from "@tanstack/react-query";

export function useGithubUser() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["githubUser", "iankwiatko"],
    queryFn: fetchGitHubUser,
  });

  if (error) {
    console.error("Failed to load GitHub stats", error);
  }

  return { githubUserData: data ?? null, isLoading };
}
