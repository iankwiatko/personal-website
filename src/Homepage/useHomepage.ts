import { useEffect, useState } from "react";

import type { githubUserData } from "../Types/githubUserData";

export function useHomepage() {
  const [githubUserData, setGithubUserData] = useState<githubUserData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHubUser(): Promise<void> {
      try {
        const githubUserResponse = await fetch(
          "https://api.github.com/users/iankwiatko",
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
            signal: controller.signal,
          },
        );

        if (!githubUserResponse.ok) {
          throw new Error("Unable to load GitHub profile");
        }

        const data = (await githubUserResponse.json()) as githubUserData;
        setGithubUserData(data);
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        console.error("Failed to load GitHub stats", error);
        setGithubUserData(null);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadGitHubUser();

    return () => {
      controller.abort();
    };
  }, []);

  return { githubUserData, isLoading };
}
