export type GithubEvent = {
  type: string;
  repo?: {
    name: string;
  };
  payload?: {
    head?: string;
  };
};
