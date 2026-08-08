import { TechnologyTag } from "./technologyTag";
import { useHomepage } from "./useHomepage";

function Homepage() {
  const { githubUserData, isLoading } = useHomepage();

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
              Welcome to my website! I'm Ian, a Software Engineer and BS of
              Computer Science and Engineering graduate from The Ohio State
              University, with hands-on experience in full-stack agile web
              development using React.JS, TypeScript, Ruby on Rails, and other
              industry-standard tools. I've worked on diverse projects,
              including modernizing customer facing websites from Angular to
              React, optimizing APIs that handle thousands of daily requests,
              and collaborating with multiple teams to deliver projects on time.
              In my free time, I also enjoy designing web-apps to fix problems I
              have, learning and exploring new technologies, and exploring all
              things computer related!
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex rounded-full bg-gradient-to-br from-slate-950 to-blue-600 px-4 py-3 font-semibold text-slate-50 shadow-[0_12px_24px_rgba(37,99,235,0.2)] transition duration-200 hover:-translate-y-0.5"
                href="#about"
              >
                Explore my work
              </a>
              <a
                className="inline-flex rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 font-semibold text-slate-50 transition duration-200 hover:-translate-y-0.5"
                href="#contact"
              >
                Get in touch
              </a>
            </div>
          </div>
        </article>
      </section>

      <section className={sectionClass} id="about">
        <article className={sectionCardClass}>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-slate-50">Projects</h2>
              <p className="text-sm text-slate-300">
                I'm always working on something new to learn new technologies
                and improve my skills.
              </p>
              <p className="text-sm text-slate-300">
                Below you will find a few of my notable projects I have worked
                on, along with a short description of each, and the frameworks
                used to build them. Most of them have been hosted as well! You
                can also view my GitHub profile for a more complete list of my
                work.
              </p>
            </div>

            <div className="grid gap-4">
              {isLoading ? (
                <div className="flex min-h-[13.75rem] items-center justify-center rounded-[1.125rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-800 p-4 text-center text-slate-300 shadow-[0_12px_30px_rgba(2,6,23,0.24)]">
                  Loading GitHub data...
                </div>
              ) : githubUserData ? (
                <a
                  className="block text-inherit no-underline"
                  href={githubUserData.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-col gap-3 rounded-[1.125rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-800 p-4 shadow-[0_12px_30px_rgba(2,6,23,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(2,6,23,0.24)]">
                    <div className="flex items-center gap-3">
                      <img
                        className="h-14 w-14 rounded-full border border-white/10"
                        src={githubUserData.avatar_url}
                        alt={`${githubUserData.login} avatar`}
                      />
                      <div>
                        <h3 className="text-base font-semibold text-slate-50">
                          {githubUserData.name ?? githubUserData.login}
                        </h3>
                        <p className="text-sm text-slate-300">
                          @{githubUserData.login}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-slate-300">
                      {githubUserData.bio ??
                        "Building thoughtful web experiences."}
                    </p>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3">
                        <strong className="text-base text-slate-50">
                          {githubUserData.public_repos}
                        </strong>
                        <span className="text-xs text-slate-400">Repos</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3">
                        <strong className="text-base text-slate-50">
                          {githubUserData.followers}
                        </strong>
                        <span className="text-xs text-slate-400">
                          Followers
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 p-3">
                        <strong className="text-base text-slate-50">
                          {githubUserData.following}
                        </strong>
                        <span className="text-xs text-slate-400">
                          Following
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex min-h-[13.75rem] flex-col items-center justify-center gap-4 rounded-[1.125rem] border border-white/10 bg-gradient-to-br from-slate-950 to-slate-800 p-4 text-center text-slate-300 shadow-[0_12px_30px_rgba(2,6,23,0.24)]">
                  <p>
                    GitHub stats are temporarily unavailable. Visit my profile
                    directly.
                  </p>
                  <a
                    className="inline-flex rounded-full bg-blue-600 px-4 py-3 font-semibold text-slate-50 transition duration-200 hover:-translate-y-0.5"
                    href="https://github.com/iankwiatko"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open GitHub
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <a
              className="flex flex-col gap-3 rounded-[1.25rem] border border-white/10 bg-slate-800/70 p-5 text-slate-100 no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-slate-700/80 hover:shadow-[0_14px_30px_rgba(2,6,23,0.24)]"
              href="https://ridepare.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">RidePare</h3>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-sm font-semibold text-slate-300">
                  ridepare.com
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-300">
                RidePare is an attempt to improve mobility efficiency,
                accessibility and sustainability in our community by providing
                fare and journey information for various rideshare programs such
                as Uber, Lyft, Lime and CitiBikes. This project was made in 24
                hour for the 2024 Hack OH/IO Event, and was built using React
                for the frontend and Express for the backend, incorporating some
                Google and OpenSource APIs for address, distance, routing and
                map generation.
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                <TechnologyTag name="react" />
                <TechnologyTag name="express" />
                <TechnologyTag name="vercel" />
              </div>
            </a>
          </div>
        </article>
      </section>

      <section className={sectionClass} id="contact">
        <article className={`${sectionCardClass} flex flex-col gap-4`}>
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-slate-50">Contact</h2>
            <p className="text-[0.95rem] text-slate-300">
              Feel free to reach out to me via email or connect with me on
              LinkedIn or GitHub.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <a
              className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-slate-800/70 p-4 text-slate-100 no-underline transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(2,6,23,0.22)]"
              href="mailto:iankwiatko@gmail.com"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 font-semibold text-white">
                ✉
              </span>
              <div className="flex flex-col gap-1">
                <strong className="text-[0.95rem]">Email</strong>
                <span className="text-[0.85rem] text-slate-400">
                  iankwiatko@gmail.com
                </span>
              </div>
            </a>

            <a
              className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-slate-800/70 p-4 text-slate-100 no-underline transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(2,6,23,0.22)]"
              href="https://www.linkedin.com/in/iankwiatko"
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 font-semibold text-white">
                in
              </span>
              <div className="flex flex-col gap-1">
                <strong className="text-[0.95rem]">LinkedIn</strong>
                <span className="text-[0.85rem] text-slate-400">
                  Connect with me
                </span>
              </div>
            </a>

            <a
              className="flex items-center gap-3 rounded-[1rem] border border-white/10 bg-slate-800/70 p-4 text-slate-100 no-underline transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(2,6,23,0.22)]"
              href={
                githubUserData
                  ? githubUserData.html_url
                  : "https://github.com/iankwiatko"
              }
              target="_blank"
              rel="noreferrer"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 font-semibold text-white">
                GH
              </span>
              <div className="flex flex-col gap-1">
                <strong className="text-[0.95rem]">GitHub</strong>
                <span className="text-[0.85rem] text-slate-400">
                  See my projects
                </span>
              </div>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Homepage;
