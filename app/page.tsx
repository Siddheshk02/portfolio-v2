import styles from "./page.module.css";

const experience = [
  {
    company: "Grexa AI",
    title: "Software Engineer",
    period: "Jun 2025 – Present",
    location: "Navi Mumbai",
    highlights: [
      "Own the backend development of Grexa AI's Google Business Profile optimization workflow, including orchestration, validation, auto-trigger, pause/resume, reruns, live detection, and recovery flows.",
      "Built AI-powered Products & Activities generation and async upload processing for GBP workflows.",
      "Developed a keyword-generation pipeline that combines Google Ads data, review insights, and curated relevance filtering to support location targeting.",
      "Improved the AI review reply system through synchronization, retry handling, security fixes, and production reliability work.",
      "Designed and delivered media management on Cloudflare R2 for secure storage, scheduled uploads, and synchronization with GBP.",
      "Enhanced multi-account authentication, concurrent location sync, and Google API support workflows across core GBP platform features.",
    ],
    tech: [
      "Go",
      "Gin",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "gRPC",
      "Cloudflare R2",
      "Google Business Profile API",
      "Google Ads API",
      "Statsig",
    ],
  },
  {
    company: "Schooglink",
    title: "Freelance Go Developer",
    period: "Sep 2024 – Present",
    highlights: [
      "Built a Google Vertex AI pipeline to process scanned exam papers from Cloud Storage and transform them into structured, categorized JSON outputs.",
      "Designed and shipped Go REST APIs for session handling, analytics, student progress tracking, and PostgreSQL-backed workflows.",
      "Managed PostgreSQL schema migrations and integrated reporting automation with Google Cloud Storage and Paytm payments.",
    ],
    tech: [
      "Go",
      "Gorilla Mux",
      "PostgreSQL",
      "Vertex AI",
      "Google Cloud Storage",
      "Golang Migrate",
      "Paytm",
    ],
  },
  {
    company: "Wellfyn",
    title: "Golang Developer Intern",
    period: "Jun 2023 – Nov 2023",
    highlights: [
      "Reduced API response time by 91% by adding Redis caching for frequently accessed data and optimizing query paths.",
      "Built REST APIs, automated invoice generation and email delivery, and improved PostgreSQL performance with GORM.",
      "Diagnosed production issues while contributing to code reviews and backend reliability improvements.",
    ],
    tech: ["Go", "Gin", "PostgreSQL", "GORM", "Redis"],
  },
  {
    company: "Dquip CRM",
    title: "Software Engineer Intern",
    period: "Jun 2022 – Sep 2022",
    highlights: [
      "Developed backend APIs for a CRM application and worked closely with a product team to deliver features in an agile environment.",
    ],
    tech: ["PHP", "Laravel 6", "MySQL", "REST APIs"],
  },
];

const featuredProjects = [
  {
    name: "Securelee Vault",
    summary:
      "A CLI-based secret manager with OAuth authentication and a terminal UI for secure storage and retrieval of sensitive credentials.",
    tech: ["Go", "Pangea", "OAuth", "TUI"],
    links: [{ label: "GitHub", href: "https://github.com/Siddheshk02/Securelee-cli" }],
  },
  {
    name: "AI Idea Generator",
    summary:
      "A creative tooling app that combines Go services and AI prompts to generate ideas for projects, writing, and automation work.",
    tech: ["Go", "Groq AI", "Next.js"],
    links: [
      { label: "Demo", href: "https://idea-generator-sigma.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Siddheshk02/idea-generator" },
    ],
  },
  {
    name: "URL Shortener",
    summary:
      "A scalable URL shortening service built in Go with Redis-backed storage, analytics, and Docker deployment for quick iteration.",
    tech: ["Go", "Redis", "Docker", "REST APIs"],
    links: [{ label: "GitHub", href: "https://github.com/Siddheshk02/url-shortener" }],
  },
  {
    name: "Carbon Footprint Calculator",
    summary:
      "A lightweight calculator for understanding emissions from daily activities, designed to make sustainability data understandable and actionable.",
    tech: ["Go", "Docker"],
    links: [
      { label: "Demo", href: "https://ai-carbon.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Siddheshk02/AI-Carbon" },
    ],
  },
];

const writing = [
  { title: "Build a Self-Destructing CLI Tool in Go", href: "https://medium.com/@siddheshkh/building-a-self-destructing-cli-tool-in-go-b9736b05e732" },
  { title: "How to Build a Concurrent Key-Value Store in Go", href: "https://medium.com/@siddheshkh/how-to-build-a-concurrent-key-value-store-in-go-097e87cdcd5f" },
  { title: "Build a URL Shortener using Golang, Redis and Docker", href: "https://medium.com/@siddheshkh/url-shortening-service-using-go-cf7e82395772" },
  { title: "Taking Pagination to the Next Level: Sorting and Filtering in Go APIs", href: "https://medium.com/@siddheshkh/sorting-and-filtering-in-go-471dff37e40b" },
  { title: "Paginate APIs using Go", href: "https://medium.com/@siddheshkh/how-to-paginate-api-responses-in-go-c7796c7892b8" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <a href="#top" className={styles.brand} aria-label="Siddhesh Khandagale home">
            Siddhesh Khandagale
          </a>

          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#writing">Writing</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className={styles.resumeLink} href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </header>

        <main>
          <section className={styles.hero} id="top">
            <p className={styles.eyebrow}>Go backend engineer</p>
            <h1>I build reliable backend systems.</h1>
            <p className={styles.lede}>
              I design and ship Go services, API integrations, background jobs, and internal tooling for product teams.
            </p>

            <div className={styles.metaRow} aria-label="Core technical areas">
              <span>Go</span>
              <span>APIs</span>
              <span>Distributed systems</span>
              <span>Platform tooling</span>
            </div>
          </section>

          <section className={styles.section} id="experience">
            <div className={styles.sectionHeader}>
              <p>Experience</p>
            </div>

            <div className={styles.timeline}>
              {experience.map((role) => (
                <article key={`${role.company}-${role.title}`} className={styles.roleCard}>
                  <div className={styles.roleTopline}>
                    <div>
                      <span className={styles.company}>{role.company}</span>
                      <h3>{role.title}</h3>
                    </div>
                    <div className={styles.roleMeta}>
                      <span>{role.period}</span>
                      {role.location ? <span>{role.location}</span> : null}
                    </div>
                  </div>

                  <ul className={styles.bulletList}>
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.techGroup} aria-label={`${role.company} technologies`}>
                    {role.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} id="projects">
            <div className={styles.sectionHeader}>
              <p>Projects</p>
            </div>

            <div className={styles.projectGrid}>
              {featuredProjects.map((project) => (
                <article key={project.name} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <h3>{project.name}</h3>
                    <span className={styles.projectDot} aria-hidden="true" />
                  </div>
                  <p>{project.summary}</p>

                  <div className={styles.techGroup} aria-label={`${project.name} technologies`}>
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} id="writing">
            <div className={styles.sectionHeader}>
              <p>Writing</p>
            </div>

            <ul className={styles.writingList}>
              {writing.map((item) => (
                <li key={item.title}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </main>

        <footer className={styles.footer} id="contact">
          <div>
            <p className={styles.footerLabel}>Contact</p>
            <h2>Open to engineering opportunities.</h2>
          </div>

          <div className={styles.contactLinks}>
            <a href="mailto:siddhesh.khandagale.dev@gmail.com">siddhesh.khandagale.dev@gmail.com</a>
            <a href="https://github.com/Siddheshk02" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/siddhesh-khandagale-3835581bb" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
