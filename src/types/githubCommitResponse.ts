export type GithubCommitResponse = {
  sha: string;
  html_url: string;
  commit: {
    message: string;
  };
};
