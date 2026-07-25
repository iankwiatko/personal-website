import { useEffect, useState } from "react";
import "./App.css";

type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    async function loadGitHubUser() {
      try {
        const response = await fetch(
          "https://api.github.com/users/iankwiatko",
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Unable to load GitHub profile");
        }

        const data = (await response.json()) as GitHubUser;

        if (isMounted) {
          setUser(data);
        }
      } catch (error) {
        console.error("Failed to load GitHub stats", error);
        if (isMounted) {
          setUser(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    void loadGitHubUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <main className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Hello, I’m</p>
          <h1>
            Ian <span>Kwiatkowski</span>
          </h1>
          <h2 className="subtitle">
            Software Engineer II | Full-Stack Web Developer
          </h2>
          <p className="intro">
            Welcome to my website! I'm Ian, a Software Engineer and BS of
            Computer Science and Engineering graduate from The Ohio State
            University, with hands-on experience in full-stack agile web
            development using React.JS, TypeScript, Ruby on Rails, and other
            industry-standard tools. I've worked on diverse projects, including
            modernizing customer facing websites from Angular to React,
            optimizing APIs that handle thousands of daily requests, and
            collaborating with multiple teams to deliver projects on time. In my
            free time, I also enjoy designing web-apps to fix problems I have,
            learning and exploring new technologies, and exploring all things
            computer related!
          </p>
          <div className="actions">
            <a className="button primary" href="#about">
              Explore my work
            </a>
            <a className="button secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <section className="content-section" id="about">
        <article className="content-card about-card">
          <div className="about-copy">
            <h2>My Projects</h2>
            <p>
              I’m always working on something new to learn and improve my
              skills!
            </p>
            <p className="about-note">
              Here are a few snapshots of my GitHub activity and contribution
              habits.
            </p>

            {user && (
              <div className="about-actions">
                <a
                  className="button primary"
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub profile
                </a>
              </div>
            )}
          </div>

          <div className="stats-grid">
            {loading ? (
              <div className="github-card github-card--loading">
                Loading GitHub data...
              </div>
            ) : user ? (
              <>
                <div className="github-card">
                  <div className="github-card__header">
                    <img
                      className="github-avatar"
                      src={user.avatar_url}
                      alt={`${user.login} avatar`}
                    />
                    <div>
                      <h3>{user.name ?? user.login}</h3>
                      <p>@{user.login}</p>
                    </div>
                  </div>

                  <p className="github-bio">
                    {user.bio ?? "Building thoughtful web experiences."}
                  </p>

                  <div className="github-stats">
                    <div className="github-stat">
                      <strong>{user.public_repos}</strong>
                      <span>Repos</span>
                    </div>
                    <div className="github-stat">
                      <strong>{user.followers}</strong>
                      <span>Followers</span>
                    </div>
                    <div className="github-stat">
                      <strong>{user.following}</strong>
                      <span>Following</span>
                    </div>
                  </div>
                </div>
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=iankwiatko&theme=github-dark-blue&hide_border=true"
                  alt="Ian's GitHub streak"
                />
              </>
            ) : (
              <div className="github-card github-card--fallback">
                GitHub stats are temporarily unavailable. Visit my profile
                directly.
                <a
                  className="button primary github-link"
                  href="https://github.com/iankwiatko"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open GitHub
                </a>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="content-section" id="contact">
        <article className="content-card contact-card">
          <div className="contact-intro">
            <h2>Contact</h2>
            <p>
              I’m always open to new conversations about build work, design, and
              creative ideas.
            </p>
          </div>

          <div className="contact-grid">
            <a className="contact-tile" href="mailto:iankwiatko@gmail.com">
              <span className="contact-icon">✉</span>
              <div className="contact-tile__content">
                <strong>Email</strong>
                <span>iankwiatko@gmail.com</span>
              </div>
            </a>

            <a
              className="contact-tile"
              href="https://www.linkedin.com/in/iankwiatko"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">in</span>
              <div className="contact-tile__content">
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </div>
            </a>

            <a
              className="contact-tile"
              href={user ? user.html_url : "https://github.com/iankwiatko"}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">GH</span>
              <div className="contact-tile__content">
                <strong>GitHub</strong>
                <span>See my projects</span>
              </div>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
export default App;
