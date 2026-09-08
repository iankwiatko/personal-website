export type GithubEvent = {
  type: string;
  created_at: string;
  repo?: {
    name: string;
  };
  payload?: {
    head?: string;
  };
};
