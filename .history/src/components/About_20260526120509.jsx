import { personal, stats } from '../data/portfolio'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

export default function About() {
  const titleRef  = useScrollReveal()
  const textRef   = useScrollReveal()
  const cardsRef  = useScrollReveal()

  return (
    <section id="about">
      <div className="wrap">
        <p className="section-label">About Me</p>

        <h2 className="section-title reveal" ref={titleRef}>
          Fresh graduate.<br />Ready to build.
        </h2>

        <div className="about-grid">
          {/* Left: text */}
          <div className="about-text reveal d1" ref={textRef}>
            {personal.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about-links">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub Profile →
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="about-cards reveal d2" ref={cardsRef}>
            {stats.map((s, i) => (
              <div className="about-stat-card" key={i}>
                <div className="asc-val">{s.value}</div>
                <div className="asc-label">{s.label}</div>
              </div>
            ))}

            {/* Honest note card */}
            <div className="about-note-card">
              <span className="note-icon">💡</span>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
