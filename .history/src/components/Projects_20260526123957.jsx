import { projects } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

function ProjectCard({ p, index }) {
  const cardRef = useScrollReveal()

  return (
    <div className={`project-card reveal d${Math.min(index, 3)}`} ref={cardRef}>

      {/* Header */}
      <div className="project-header">
        <div>
          <div className="project-number">Project 0{index + 1}</div>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-tagline">{p.tagline}</p>
        </div>
        <div className="project-badges">
          {p.demo ? (
            <span className="badge-live">Live & Deployed</span>
          ) : (
            <span className="badge-wip">In Progress</span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-body">

        {/* Left */}
        <div className="project-left">
          <p className="project-desc">{p.description}</p>

          <div className="project-features">
            <div className="feat-label">What it does</div>
            <ul>
              {p.features.map((f, i) => (
                <li key={i}>
                  <span className="feat-arrow">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {p.honest && (
            <div className="project-honest">
              <span>🧠</span>
              <div>
                <div className="honest-label">What I learned</div>
                <p>{p.honest}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="project-right">

          {/* Browser Preview */
          <div className="mock-browser">
            <div className="mock-topbar">
              <span className="mock-dot" style={{ background: '#ef4444' }} />
              <span className="mock-dot" style={{ background: '#f59e0b' }} />
              <span className="mock-dot" style={{ background: '#10b981' }} />
              <div className="mock-url">
                {p.demo ? p.demo.replace('https://', '') : 'localhost:3000'}
              </div>
              {p.demo && (
                
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="mock-open"
                  title="Open in new tab"
                >
                  ↗
                </a>
              )}
            </div>

            <div className="mock-content">
              {p.demo ? (
                <iframe
                  src={p.demo}
                  title={p.title}
                  className="mock-iframe"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              ) : (
                <div className="mock-no-demo">
                  <span>🔨</span>
                  <p>Live demo coming soon</p>
                </div>
              )}
            </div>
          </div>

          {/* Stack */}
          <div className="project-stack">
            <div className="stack-label">Tech Stack</div>
            <div className="stack-tags">
              {p.stack.map((t, i) => (
                <span className="stack-tag" key={i}>{t}</span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="project-actions">
            {p.github && p.github !== 'YOUR_GITHUB_LINK' && (
              <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                <GithubIcon /> View Code
              </a>
            )}
            {p.demo && p.demo !== 'YOUR_PORTFOLIO_LINK' && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                Live Demo →
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const titleRef = useScrollReveal()

  return (
    <section id="projects">
      <div className="wrap">
        <p className="section-label">Projects</p>
        <h2 className="section-title reveal" ref={titleRef}>
          What I've built.
        </h2>
        <p className="section-sub">
          Real projects — built end to end, not just tutorial clones.
        </p>

        <div className="projects-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}