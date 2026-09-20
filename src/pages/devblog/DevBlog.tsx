import { useDevBlog } from "./useDevBlog";

// NOTE: This page is intentionally not wired up to any route or link yet.
// The app has no router, so this component is unreachable until it is
// explicitly imported and rendered (e.g. from main.tsx or a future router).
function DevBlog() {
  const { posts, isLoading } = useDevBlog();

  return (
    <main className="relative flex min-h-screen flex-col gap-5 px-6 pb-16 pt-12 text-slate-100 lg:px-8">
      <section className="page-section" id="devblog">
        <article className="section-card overflow-hidden">
          <h1 className="text-[clamp(2.4rem,4.4vw,3.8rem)] font-semibold">
            Devblog
          </h1>
        </article>
      </section>

      <section className="page-section page-section--divided" id="posts">
        <article className="section-card min-w-0">
          {isLoading ? (
            <div className="github-status">Loading posts...</div>
          ) : posts.length > 0 ? (
            <div className="grid gap-4">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="flex flex-col gap-2 rounded-[1.25rem] border border-white/10 bg-slate-800/70 p-5 text-slate-100"
                >
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p className="text-sm text-slate-400">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm leading-7 text-slate-300">
                    {post.summary}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400">No posts yet.</p>
          )}
        </article>
      </section>
    </main>
  );
}

export default DevBlog;
