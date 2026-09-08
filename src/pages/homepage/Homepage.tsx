import { FolderGit2, Mail } from "lucide-react";

import { ContributionGraph } from "../../components/ContributionGraph";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/projects";
import { useGithubUser } from "./useHomepage";

function Homepage() {
  const { githubUserData, isLoading } = useGithubUser();

  const sectionClass =
    "relative mx-auto w-full max-w-5xl pt-4 scroll-mt-6 before:absolute before:top-0 before:left-1/2 before:h-px before:w-[min(68%,680px)] before:-translate-x-1/2 before:bg-gradient-to-r before:from-transparent before:via-slate-400/25 before:to-transparent before:content-['']";
  const introSectionClass =
    "relative mx-auto w-full max-w-5xl pt-4 scroll-mt-6";
  const sectionCardClass =
    "animate-[fadeUp_700ms_ease_both] rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_18px_40px_rgba(2,6,23,0.3)] backdrop-blur-sm";

  return (
    <main className="relative flex min-h-screen flex-col gap-5 px-6 pb-16 pt-12 text-slate-100 lg:px-8">
      <section className={introSectionClass} id="intro">
        <article className={`${sectionCardClass} overflow-hidden`}>
          <div className="relative z-10">
            <h1 className="text-[clamp(2.4rem,4.4vw,3.8rem)] font-semibold">
              Ian Kwiatkowski
            </h1>

            <h2 className="mt-3 text-base font-semibold text-slate-300">
              Software Engineer II • Full-Stack Developer
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Software Engineer and BS of Computer Science and Engineering
              graduate from The Ohio State University, with hands-on experience
              in full-stack agile web development. I've worked on diverse
              projects, including building web applications used by thousands of
              users daily to optimizing APIs that handle multiple requests a
              minute. I also enjoy designing web apps to solve problems I have,
              learning new technologies, and exploring all things computer
              related!
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-medium text-slate-400">
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                href="mailto:iankwiatko@gmail.com"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                className="inline-flex items-center gap-1 transition-colors hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                href="https://www.linkedin.com/in/iankwiatko"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-base font-bold leading-none">in</span>
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                href="https://github.com/iankwiatko"
                target="_blank"
                rel="noreferrer"
              >
                <FolderGit2 size={18} />
                GitHub
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className={sectionClass} id="about">
        <article className={sectionCardClass}>
          <div className="grid gap-4">
            {isLoading ? (
              <div className="flex min-h-[13.75rem] items-center justify-center rounded-[1.125rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-800 p-4 text-center text-slate-300 shadow-[0_12px_30px_rgba(2,6,23,0.24)]">
                Loading GitHub data...
              </div>
            ) : githubUserData ? (
              <div className="block text-inherit no-underline">
                <div className="flex flex-col gap-3 rounded-[1.125rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-800 p-4 shadow-[0_12px_30px_rgba(2,6,23,0.24)]">
                  <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
                    <div className="flex flex-col gap-3 md:pt-3">
                      <a
                        className="group -m-2 flex flex-col gap-3 rounded-xl p-2 text-inherit no-underline transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 sm:flex-row sm:items-center sm:justify-between"
                        href={githubUserData.html_url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Ian's GitHub profile"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <img
                            className="h-14 w-14 rounded-full border border-white/10"
                            src={githubUserData.avatar_url}
                            alt={`${githubUserData.login} avatar`}
                          />
                          <div className="min-w-0 space-y-1">
                            <h3 className="truncate text-base font-semibold leading-6 text-slate-50">
                              {githubUserData.name ?? githubUserData.login}
                            </h3>
                            <p className="truncate text-sm leading-6 text-slate-300">
                              @{githubUserData.login}
                            </p>
                          </div>
                        </div>

                        <div className="grid min-w-0 grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-white/5 p-1 transition-colors duration-200 group-hover:border-white/20 sm:ml-3 sm:flex-1">
                          <div className="flex flex-col items-center gap-0.5 px-1.5 py-3">
                            <strong className="text-sm font-semibold text-slate-50">
                              {githubUserData.public_repos}
                            </strong>
                            <span className="text-[0.6rem] font-medium uppercase tracking-wide text-slate-400">
                              Repos
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 px-1.5 py-3">
                            <strong className="text-sm font-semibold text-slate-50">
                              {githubUserData.followers}
                            </strong>
                            <span className="text-[0.6rem] font-medium uppercase tracking-wide text-slate-400">
                              Followers
                            </span>
                          </div>
                          <div className="flex flex-col items-center gap-0.5 px-1.5 py-3">
                            <strong className="text-sm font-semibold text-slate-50">
                              {githubUserData.following}
                            </strong>
                            <span className="text-[0.6rem] font-medium uppercase tracking-wide text-slate-400">
                              Following
                            </span>
                          </div>
                        </div>
                      </a>

                      <div className="md:mt-auto">
                        <ContributionGraph
                          contributions={githubUserData.contributions}
                          isUnavailable={
                            githubUserData.contributionsUnavailable
                          }
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-white/10 pt-3 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="text-sm font-semibold text-slate-200">
                          Recent commits
                        </h4>
                        <a
                          className="inline-flex rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                          href="https://github.com/search?q=author%3Aiankwiatko&type=commits"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="View Ian's GitHub commit history"
                          title="View commit history"
                        >
                          <FolderGit2 size={18} />
                        </a>
                      </div>
                      {githubUserData.recentCommits.length > 0 ? (
                        <div className="flex flex-col gap-2">
                          {githubUserData.recentCommits.map((commit) => (
                            <a
                              key={commit.sha}
                              className="flex min-w-0 flex-col gap-0.5 rounded-lg border border-transparent bg-white/5 px-3 py-2 text-left transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-white/10 hover:shadow-[0_8px_18px_rgba(2,6,23,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                              href={commit.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="truncate text-sm text-slate-200">
                                {commit.message}
                              </span>
                              <span className="text-xs text-slate-400">
                                {commit.repository}
                              </span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-slate-400">
                          No recent public commits found.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[13.75rem] flex-col items-center justify-center gap-4 rounded-[1.125rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-800 p-4 text-center text-slate-300 shadow-[0_12px_30px_rgba(2,6,23,0.24)]">
                <p>
                  GitHub stats are temporarily unavailable. Visit my profile
                  directly.
                </p>
                <a
                  className="inline-flex rounded-full bg-blue-600 px-4 py-3 font-semibold text-slate-50 transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
                  href="https://github.com/iankwiatko"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open GitHub
                </a>
              </div>
            )}
          </div>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </article>
      </section>
    </main>
  );
}

export default Homepage;
