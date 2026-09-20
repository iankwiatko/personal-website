import { blogPosts } from "../../data/blogPosts";

// TODO: replace with a real data source (CMS, markdown files, API) when ready.
export function useDevBlog() {
  return {
    posts: blogPosts,
    isLoading: false,
  };
}
